import { traineeRouter } from './controllers';
import { UserRouter  } from './controllers/user';
import { Router } from 'express';

const mainRouter = Router();

mainRouter.use('/trainee', traineeRouter);
mainRouter.use( '/user' , UserRouter  );
export default mainRouter;
