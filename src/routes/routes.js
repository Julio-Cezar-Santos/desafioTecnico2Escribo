const express = require("express");
const user = require("./usersRoutes");

const router = express.Router();

router.use(user);

module.exports = router;