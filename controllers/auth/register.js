const { Conflict } = require("http-errors");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

const { User } = require("../../models");

const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        throw new Conflict(`User with ${email} already exist`)
    };

    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    const avatarURL = gravatar.url(email, {s: '250', r: 'pg', d: '404'});

    const result = await User.create({ email, avatarURL,  password: hashPassword });
    res.status(201).json({
        status: "success",
        code: 201,
        data: {
            user: {
                email,
                avatarURL
                
            }
        }
    })
};

module.exports = register;
