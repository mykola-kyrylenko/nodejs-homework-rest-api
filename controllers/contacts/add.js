const contactsOperations = require("../../model");


const add = async (req, res) => {
    const result = await contactsOperations.addContact(req.body);
    res.status(201).json({
        status: "succes",
        code: 201,
        data: {
            result
        }
    });
};



module.exports = add;