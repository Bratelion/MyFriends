import * as Koa from 'koa';
import * as Router from 'koa-router';
import { getRepository, Repository } from 'typeorm';
import { Friend } from '../entity/Friend'
import * as HttpStatus from 'http-status-codes';

const routerOpts: Router.IRouterOptions = {
  prefix: '/friends',
};

const router: Router = new Router(routerOpts);

router.get('/', async (ctx:Koa.Context) => {
  // Get the friend repository from TypeORM.
  const friendRepo:Repository<Friend> = getRepository(Friend);

  // Find the requested friend.
  const Friends = await friendRepo.find();

  // Respond with our friend data.
  ctx.body = {
    status : "All your friends from FriendList", Friends, 
  };
});

router.get('/:friend_id', async (ctx:Koa.Context) => {
  // Get the Friend repository from TypeORM.
  const friendRepo:Repository<Friend> = getRepository(Friend);

  // Find the requested Friend.
  const FriendById = await friendRepo.findOne(ctx.params.friend_id);

  // If the Friend doesn't exist, then throw a 404.
  // This will be handled upstream by our custom error middleware.
  if (!FriendById) {
    ctx.throw(HttpStatus.StatusCodes.NOT_FOUND);
  }

  // Respond with our Friend data.
  ctx.body = {
	  status : "Friend with id = " + ctx.params.friend_id, FriendById, 
  };
});

router.post('/', async (ctx:any) => {
  // Get the Friend repository from TypeORM.
  const friendRepo:Repository<Friend> = getRepository(Friend);

  const NewFriend: Friend = new Friend();

  const { first_name, last_name, nickname, rating} = ctx.request.body;
  NewFriend.first_name = first_name;
  NewFriend.last_name = last_name;
  NewFriend.nickname = nickname;
  NewFriend.rating = rating;

  // Persist it to the database.
  await friendRepo.save(NewFriend);

  // Set the status to 201.

  // Respond with our Friend data.ctx.status = HttpStatus.CREATED;
  ctx.body = { 
	  status : "Added to FriendList", NewFriend, 
  };
});

router.delete('/:friend_id', async (ctx:Koa.Context) => {
	// Get the friend repository from TypeORM.
	const friendRepo:Repository<Friend> = getRepository(Friend);
  
	// Find the requested friend.
	const DeleteFriend = await friendRepo.findOne(ctx.params.friend_id);
  
	// If the friend doesn't exist, then throw a 404.
	// This will be handled upstream by our custom error middleware.
	if (!DeleteFriend) {
	  ctx.throw(HttpStatus.StatusCodes.NOT_FOUND);
	}
  
	// Delete our friend.
	await friendRepo.delete(DeleteFriend);
  
	// Respond with no data, but make sure we have a 204 response code.
	ctx.status = HttpStatus.StatusCodes.NO_CONTENT;

  ctx.body = { 
    status : "Deleted from FriendList", DeleteFriend, 
  };
  });



export default router;