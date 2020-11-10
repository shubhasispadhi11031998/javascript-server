import { Router } from "express";
import UserController from "./Controller";
import validationHandler from "../../libs/validationHandler";
import Validation from './validation';
import authMiddleWare from '../../libs/routes/authMiddleware';

const UserRouter=Router();
UserRouter.route('/me')
.get(authMiddleWare('getuser1','read'),UserController.me);

UserRouter.route('/login')
.post(UserController.login,validationHandler(Validation.create),UserController.me);

export default UserRouter;

