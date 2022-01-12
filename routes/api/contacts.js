const express = require('express');
const router = express.Router();

const { validation, ctrlWrapper } = require("../../middlewares/index");
const { contactSchema } = require("../../schemas/index");
const { contacts: ctrl } = require("../../controllers");

const validateMiddleware = validation(contactSchema);

router.get('/', ctrlWrapper(ctrl.getAll));

router.get('/:id', ctrlWrapper(ctrl.getById));

router.post('/',  validateMiddleware, ctrlWrapper(ctrl.add));

router.delete('/:id', ctrlWrapper(ctrl.removeById));

router.put('/:id', validateMiddleware, ctrlWrapper(ctrl.updateById));


module.exports = router;

