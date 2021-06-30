import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentsController } from './controllers/CreateComplimentController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticate';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ListUserSenderComplimentsController } from './controllers/ListUserSendComplimentsController';
import { ListUserReceiverComplimentsController } from './controllers/ListUserReceiverComplimentsController';
import {ListTagsController} from './controllers/ListTagsController';
import { ListUsersController } from './controllers/ListUsersController';

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentsController();
const listUserSenderComplimentsController = new ListUserSenderComplimentsController();
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post('/auth', authenticateUserController.handle);

router.post(  
  '/users/create',
  ensureAuthenticated,
  ensureAdmin,
  createUserController.handle
);

router.get('/users/report',
ensureAuthenticated,
ensureAdmin,
listUsersController.handle)

router.get('/tags/report',
ensureAuthenticated,
listTagsController.handle);

router.post(
  '/tags/create',
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);

router.post(
  '/compliments/create',
  ensureAuthenticated,
  createComplimentController.handle
);

router.get(
  '/user/compliments/receive',
  ensureAuthenticated,
  listUserReceiverComplimentsController.handle
);
router.get(
  '/user/compliments/send',
  ensureAuthenticated,
  listUserSenderComplimentsController.handle
);

export { router };
