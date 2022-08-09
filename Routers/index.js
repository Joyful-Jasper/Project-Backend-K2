const express = require("express");
const router = express.Router();

// const userRoutes = require('./user')

router.get("/ping", (req, res) => {
	const ready = {
		status: "server is ready",
	};

	res.status(200).send(ready);
});

// router.use("/users", userRoutes)

module.exports = router;
