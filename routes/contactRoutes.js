const express = require('express');
const router = express.Router();
const { getContacts, getContact, createContact, updateContact, deleteContact } = require('../controllers/contactController')

// Merging all the same routes
router.route('/').get(getContacts).post(createContact);
// router.route('/').post(createContact);

// Merging all the same routes
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);
// router.route('/:id').put(updateContact);
// router.route('/:id').delete(deleteContact);
module.exports = router;