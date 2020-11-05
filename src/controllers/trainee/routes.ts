import { Router } from 'express';
import TraineeController from './controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import { authMiddleware } from '../../libs/routes';
const traineeRouter = Router();

traineeRouter.route('/')
 
 .get(authMiddleware('getUser1', 'read'),validationHandler(validation.get),TraineeController.get)
 // tslint:disable-next-line: semicolon
 .post(authMiddleware('getUser1', 'read'),validationHandler(validation.create),TraineeController.create)
 // tslint:disable-next-line: semicolon
 .put(authMiddleware('getUser1', 'read'),validationHandler(validation.update),TraineeController.update)
 // tslint:disable-next-line: semicolon
 .delete(authMiddleware('getUser1', 'read'),validationHandler(validation.delete),TraineeController.delete);
export default traineeRouter;