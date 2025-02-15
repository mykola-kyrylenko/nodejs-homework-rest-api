const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = Schema({
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
    },
    token: {
        type: String,
        default: null,
    },
}, { versionKey: false, timestamps: true });

const joiRegisterScheme = Joi.object({
    // name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
});

const joiLoginScheme = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
})

const User = model("user", userSchema)

module.exports = {
    User,
    joiRegisterScheme,
    joiLoginScheme
};