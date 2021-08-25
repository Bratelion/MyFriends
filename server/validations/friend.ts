import joi = require("joi");
import validate = require("koa-joi-validate");

export const friendIdValidation = validate({
	params: {
		friend_id : joi.number().integer().required()
	}
});

export const postNewFriendValidation = validate({
	body: {
		first_name : joi.string().required(),
		last_name : joi.string().required(),
		nickname : joi.string(),
		rating: joi.number().integer().min(1).max(10)
	}
});