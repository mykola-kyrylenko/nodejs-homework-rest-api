const express = require('express');
const router = express.Router();

const { validation, ctrlWrapper } = require("../../middlewares");
const { joiSchema } = require("../../models/contact");
const { contacts: ctrl } = require("../../controllers");

const validateMiddleware = validation(joiSchema);

router.get('/', ctrlWrapper(ctrl.getAll));

router.get('/:id', ctrlWrapper(ctrl.getById));

router.post('/',  validateMiddleware, ctrlWrapper(ctrl.add));

router.delete('/:id', ctrlWrapper(ctrl.removeById));

router.put('/:id', validateMiddleware, ctrlWrapper(ctrl.updateById));

router.patch('/:id/favorite', validateMiddleware, ctrlWrapper(ctrl.updateFavorite));


module.exports = router;

