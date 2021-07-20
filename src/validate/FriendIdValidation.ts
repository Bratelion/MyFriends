import joi = require("joi");
import validate = require("koa-joi-validate");

const FriendIdValidation = validate({
	params: {
		friend_id : joi.number().integer().required()
	}
});

export default FriendIdValidation;