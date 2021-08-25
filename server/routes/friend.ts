import * as Router from 'koa-router';

import { friendIdValidation, postNewFriendValidation} from '../validations/friend';
import { deleteFriend, getAllFriends, getFriendById, postNewFriend} from '../controllers/friend';

const routerOpts: Router.IRouterOptions = {
  prefix: '/friends',
};

const router: Router = new Router(routerOpts);

router.get('/', getAllFriends);

router.get('/:friend_id', friendIdValidation, getFriendById);

router.post('/', postNewFriendValidation, postNewFriend);

router.delete('/:friend_id', friendIdValidation, deleteFriend);

export default router;
