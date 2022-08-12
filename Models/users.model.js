const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

const usersSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		maxlength: 50,
	},
	email: {
		type: String,
		required: true,
		maxlength: 100,
	},
	username: {
		type: String,
		required: true,
		maxlength: 50,
	},
	address: {
		type: String,
		required: true,
		default: "Your home",
		maxlength: 500,
	},
	phone: {
		type: String,
		maxlength: 14,
		minlength: 8,
	},
	avatar: {
		type: String,
		required: false,
		default: "https://i.pravatar.cc/300",
	},
	password: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		default: "user",
	},
	// order: [{ type: Schema.Types.ObjectId, ref: "orderModel" }],
});

const usersModel = mongoose.model("Users", usersSchema);

module.exports = usersModel;
