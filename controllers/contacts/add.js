const {Contact} = require("../../models");


const add = async (req, res) => {
    const result = await Contact.create(req.body);
    res.status(201).json({
        status: "succes",
        code: 201,
        data: {
            result
        }
    });
};



module.exports = add;