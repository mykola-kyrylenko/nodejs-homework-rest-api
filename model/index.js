const {v4} = require("uuid")

const fs = require('fs/promises');
const filePath = require("./filePath");

const updateContacts = require("./updateContacts");



const listContacts = async () => {
  const data = await fs.readFile(filePath);
  const contacts = JSON.parse(data);
  return contacts;
};

const getContactById = async (id) => {
  const contacts = await listContacts();
  const result = contacts.find(contact => contact.id === id);

  if (!result) {
    return null
  };

  return result;
};


const removeContact = async (id) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex(contact => contact.id === id);
  
  if (idx === -1) {
    return null;
  }
  const newContacts = contacts.filter((_, index) => index !== idx);
  await updateContacts(newContacts);
  return contacts[idx];
};


const addContact = async (body) => {
  const contacts = await listContacts();
  const newContact = { id: v4(), ...body };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};


const updateContact = async (id, body) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex(contact => contact.id === id);

  if (idx === -1) {
    return null;
  }

  contacts[idx] = { id, ...body };
  await updateContacts(contacts);
  return contacts[idx];
};


module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
