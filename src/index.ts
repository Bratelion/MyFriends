import "reflect-metadata";
import {createConnection} from "typeorm";
import * as Koa from 'koa';
import * as HttpStatus from 'http-status-codes';
import * as bodyParser from 'koa-bodyparser';

import FriendController from "./controller/friend.controller";

const app:Koa = new Koa();

createConnection().then(async connection => {

    // Generic error handling middleware.
    app.use(bodyParser());
    app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
    try {
        await next();
    } catch (error) {
        ctx.status = error.statusCode || error.status || HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR;
        error.status = ctx.status;
        ctx.body = { error };
        ctx.app.emit('error', error, ctx);
    }
    });

    // Initial route
    app.use(FriendController.routes());
    app.use(FriendController.allowedMethods());

    // Application error logging.
    app.on('error', console.error);

    app.listen(3000);

}).catch(error => console.log(error));
