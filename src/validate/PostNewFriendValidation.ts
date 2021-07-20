import joi = require("joi");
import validate = require("koa-joi-validate");

const PostNewFriendValidation = validate({
	body: {
		first_name : joi.string().required(),
		last_name : joi.string().required(),
		nickname : joi.string(),
		rating: joi.number().integer().min(1).max(10)
	}
});

export default PostNewFriendValidation;