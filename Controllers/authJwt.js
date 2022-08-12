const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.authenticateJWT = async (req, res, next) => {
	const authHeader = req.headers.authorization;

	console.log(authHeader);

	if (authHeader) {
		const token = authHeader;

		jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
			if (err) {
				return res.sendStatus(403);
			}

			req.user = user;
			next();
		});
	} else {
		res.sendStatus(401);
	}
};
