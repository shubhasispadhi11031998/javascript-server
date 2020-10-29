import { Router } from 'express';
import TraineeController from './controller';

const traineeRouter = Router();
// tslint:disable-next-line: semicolon
traineeRouter.route('/')
 // tslint:disable-next-line: semicolon
 .get(TraineeController.get)
 // tslint:disable-next-line: semicolon
 .post(TraineeController.create)
 // tslint:disable-next-line: semicolon
 .put(TraineeController.update)
 // tslint:disable-next-line: semicolon
 .delete(TraineeController.delete);
export default traineeRouter;