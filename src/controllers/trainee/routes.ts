import { Router } from 'express';
import TraineeController from './controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
const traineeRouter = Router();

traineeRouter.route('/')
 
 .get(validationHandler(validation.get),TraineeController.get)
 // tslint:disable-next-line: semicolon
 .post(validationHandler(validation.create),TraineeController.create)
 // tslint:disable-next-line: semicolon
 .put(validationHandler(validation.update),TraineeController.update)
 // tslint:disable-next-line: semicolon
 .delete(validationHandler(validation.delete),TraineeController.delete);
export default traineeRouter;