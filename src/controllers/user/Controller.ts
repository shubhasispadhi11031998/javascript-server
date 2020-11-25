import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import IRequest from '../../libs/IRequest';
import UserRepository from '../../repositories/users/UserRepository';
import configuration from '../../config/configuration';
import * as bcrypt from 'bcrypt';

class UserController {
    userRepository: UserRepository = new UserRepository();
    static instance: UserController;

    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }

    public async get(req: Request, res: Response, next: NextFunction) {

        const user = new UserRepository();
        const { id } = req.query;

        await user.getUser({ id })
            .then((data) => {
                if (data === null) {
                    throw '';
                }

                res.status(200).send({
                    message: 'User Fetched successfully',

                    data,

                    code: 200
                });

            })
            .catch(err => {
                console.log(err);
                res.send({
                    error: 'User not found',
                    code: 500
                });
            });

    }
    public async getAll(req: Request, res: Response, next: NextFunction) {
        let skip: number;
        let limit: number;
        let sort: boolean;

        if ('limit' in req.query) {
            limit = Number(req.query.limit);
        } else {
            limit = 10;
        }
        if ('skip' in req.query) {
            skip = Number(req.query.limit);
        } else {
            skip = 0;
        }
        if ('sort' in req.query) {
            sort = true;
        } else {
            sort = false;
        }

        const user = new UserRepository();
        await user.getallTrainee(skip, limit, sort)
            .then((data) => {
                res.status(200).send({
                    message: 'Trainees fetched successfully',
                    'count': data[1],
                    'data': data
                });
            })
            .catch((err) => {
                res.send({
                    message: 'Unable to fetch Trainees',
                    status: 404
                });
            });
    }

    public async create(req: IRequest, res: Response, next: NextFunction) {
        const { id, name, email, role, password } = req.body;
        const user = new UserRepository();
        const creator = req.user._id;
        await user.create({ id, name, email, role, password }, creator)
            .then(() => {
                res.status(200).send({
                    message: 'User Created Successfully!',
                    data: {
                        'id': id,
                        'name': name,
                        'email': email,
                        'role': role,
                        'password': password

                    },
                    code: 200
                });
            })
            .catch((err) => {
                next({
                    error: 'User not created',
                    code: 404
                });
            });
    }
    public async update(req: IRequest, res: Response, next: NextFunction) {
        const { id, dataToUpdate } = req.body;
        console.log('id', id)
        console.log('dataToUpdate', dataToUpdate)
        const updator = req.user._id;
        const user = new UserRepository();
        await user.updateUser(id, dataToUpdate, updator)
            .then((result) => {
                res.send({
                    data: result,
                    message: 'User Updated',
                    code: 200
                });
            })
            .catch((err) => {
                res.send({
                    error: 'User Not Found for update',
                    code: 404
                });
            });
    }

    public async delete(req: IRequest, res: Response, next: NextFunction) {
        const id = req.params.id;
        const user = new UserRepository();
        const deletor = req.user._id;
        await user.delete(id, deletor)
            .then((result) => {
                res.send({
                    message: 'Deleted successfully',
                    code: 200
                });
            })
            .catch((err) => {
                next({
                    error: 'User not found to be deleted',
                    code: 404
                });
            });

    }
    public async me(req: IRequest, res: Response, next: NextFunction) {
        const data = req.user;
        res.json({
            data
        });
    }

    public async login(req: IRequest, res: Response, next: NextFunction) {
        const { email } = req.body;
        console.log('Inside User Controller Login');

        const user = new UserRepository();
        const userData = await user.getUser({ email });
        if (userData) {
            const { password } = userData;
            bcrypt.compare(req.body.password, password, function (err, result) {
                if (err) { throw (err); }

                if (result) {
                    const token = jwt.sign(userData.toJSON(), configuration.KEY, {
                        expiresIn: Math.floor(Date.now() / 1000) + (15 * 60),
                    });

                    res.send({
                        data: token,
                        message: 'login successfully',
                        status: 200,

                    });
                } else {
                    res.send(
                        {
                            message: 'Incorrect password',
                            code: 403
                        }
                    );
                }
            });
        } else {
            res.send(
                {
                    message: 'Incorrect Email',
                    code: 403
                });
        }

    }
}


export default UserController.getInstance();