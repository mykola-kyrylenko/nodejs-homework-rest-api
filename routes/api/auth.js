const express = require("express");

const { auth, validation, ctrlWrapper } = require("../../middlewares");
const { auth: ctrl} = require("../../controllers");
const { joiRegisterScheme, joiLoginScheme } = require("../../models/user");

const router = express.Router();

router.post("/register", validation(joiRegisterScheme), ctrlWrapper(ctrl.register));

router.post("/login", validation(joiLoginScheme), ctrlWrapper(ctrl.login));

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

module.exports = router;
