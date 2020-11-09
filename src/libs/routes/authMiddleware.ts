// import config from '../../controllers/trainee/validation';
import * as jwt from 'jsonwebtoken';
import { hasPermission } from '../../libs/permissions';
import { permissions } from '../../libs/constants';
import { userModel } from '../../repositories/users/UserModel';
import bcrypt from 'bcrypt';

export default () => (req, res, next) => {
    try {
        console.log("sdfd")
        // console.log('reqqqqqqqqqqqqqqqqqq',req.body)
        const { email, password } = req.body;
        userModel.findOne({ email: email }, (err, result) => {
            if (result) {
                if (password === result.password) {
                    result.password= bcrypt.hashSync(result.password,10);
                    console.log('result is', result.password);
                    const token = jwt.sign({result}, 'qwertyuiopasdfghjklzxcvbnm123456');
                    console.log(token);
                    res.send({
                        data: token,
                        message: 'Login Permited',
                        status: 200
                    });
                }
                else {
                    res.send({
                        message: 'Password Doesnt Match',
                        status: 400
                    });
                }
            }
            else {
                res.send({
                    message: 'Email is not Registered',
                    status: 404
                });
            }
        });
    }
    catch (err) {
        res.send(err);
    }
}