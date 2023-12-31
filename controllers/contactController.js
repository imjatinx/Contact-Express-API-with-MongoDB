const asyncHandler = require('express-async-handler')
const Contact = require('../models/contactModel')

/*
@desc Get all contacts
@route GET /api/contacts
@access private
*/
const getContacts = asyncHandler(async (req, res) => {
    const contact = await Contact.find({ user_id: req.user.id })
    res.status(200).json(contact)
});

/*
@desc Create New contact
@route POST /api/contacts
@access private
*/
const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("All Field Are Required!")
    }

    const contact = await Contact.create({ user_id: req.user.id, name, email, phone })
    res.status(201).json(contact)
});

/*@desc Get Individual contacts
@route GET /api/contacts/:id
@access private
*/
const getContactById = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error("Contact Not Found");
    }

    if (contact.user_id.toString() !== req.user.id) {
        res.status(404);
        throw new Error("Contact not found");
    }

    res.status(200).json(contact)
});

/*
@desc PUT contact
@route PUT /api/contacts/:id
@access private
*/
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error("Contact Not Found");
    }

    if (contact.user_id.toString() !== req.user.id) {
        res.status(404);
        throw new Error("Contact not found");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    res.status(200).json(updatedContact)
});

/*
@desc Delete contacts
@route DELETE /api/contacts/:id
@access private
*/
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error("Contact Not Found");
    }

    if (contact.user_id.toString() !== req.user.id) {
        res.status(404);
        throw new Error("Contact not found");
    }

    const deletedContact = await Contact.findByIdAndDelete(req.params.id)
    // await contact.remove()
    res.status(200).json(deletedContact)
});

module.exports = { getContacts, getContactById, createContact, updateContact, deleteContact };