const { UsersModel } = require("../Models");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

module.exports = {
	postRegister: async (req, res) => {
		const { username, password, email, name } = req.body;
		const hash = bcrypt.hashSync(password, salt);
		const exist = await UsersModel.exists({ username: username });
		if (exist) return res.json("Username has taken");
		const user = new UsersModel({ username, password: hash, email, name });
		user.save();
		res.json("Register Success");
	},
};
