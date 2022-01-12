const { NotFound } = require("http-errors");

const contactsOperations = require("../../model/index");

const updateById = async (req, res) => {
    const { id } = req.params;
    const result = await contactsOperations.updateContact(id, req.body);

    if (!result) {
        throw new NotFound(`Contacts with id=${id} not found`);
    }

    res.json({
        status: "success",
        code: 200,
        data: {
            result
        }
    })
};


module.exports = updateById;