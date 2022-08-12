const { UsersModel } = require("../Models");
const bcrypt = require("bcryptjs");
// const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
	postLogin: async (req, res) => {
		const { username, password } = req.body;
		// const hash = bcrypt.hashSync(password, salt);
		const exist = await UsersModel.find({ username: username });
		if (exist) {
			const check = bcrypt.compareSync(password, exist[0].password);
			if (check === true) {
				const accessToken = jwt.sign({ exist }, process.env.SECRET_TOKEN);
				res.json({ accessToken });
			} else {
				res.json("wrong password");
			}
		}
	},
};
