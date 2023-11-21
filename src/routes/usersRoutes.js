const express = require("express");
const signUp = require("../controllers/signUpController");
const singIn = require("../controllers/signInController");
const authenticatesingIn = require("../middlewares/authenticateSingIn");
const getLoggedInUser = require("../controllers/getLoggedInUserController");
const validateRequestBody = require("../middlewares/validateRequestBody");
const userSchema = require("../schemas/userSchema");
const singInSchema = require("../schemas/singInSchema");


const user = express.Router();

user.post("/signUp", validateRequestBody(userSchema), signUp);
user.post("/singIn", validateRequestBody(singInSchema),singIn);

user.use(authenticatesingIn);

user.get("/getUser", getLoggedInUser);

module.exports= user;