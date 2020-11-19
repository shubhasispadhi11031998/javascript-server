import { Router } from "express";
import UserController from "./Controller";
import validationHandler from "../../libs/validationHandler";
import Validation from './validation';
import authMiddleWare from '../../libs/routes/authMiddleware';
import {permissions } from '../../libs/constants';
// import {hasPermission} from '../../libs/permissions';

const UserRouter=Router();

UserRouter.route('/')
// .get( UserController.get)
.post(authMiddleWare ( permissions.getUser1, 'read' ), UserController.create )
.put(authMiddleWare ( permissions.getUser1, 'read' ), UserController.update )

UserRouter.route('/:id')
.delete( authMiddleWare ( permissions.getUser1, 'read' ), UserController.delete );

UserRouter.route('/me')
.get(authMiddleWare('getuser1','read'),UserController.me);

UserRouter.route('/login')
.post(UserController.login,validationHandler(Validation.create),UserController.me);

export default UserRouter;


