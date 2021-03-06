var mongoose = require("mongoose");
var passportLocalMongoose=require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
	username: String,
	name: String,
	password: String,
	mark: Number,
	isQuizDone: Boolean,
	levelmark:[{
		level: Number,
		difficulty: Number,
		isAnsweredCorrect: Boolean
	}],
	groupMembers: []
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",userSchema);