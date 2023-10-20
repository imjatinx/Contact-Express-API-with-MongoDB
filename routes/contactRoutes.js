const express = require('express');
const router = express.Router();
const { getContacts, getContactById, createContact, updateContact, deleteContact } = require('../controllers/contactController')

// Merging all the same routes
router.route('/').get(getContacts).post(createContact);
// router.route('/').post(createContact);

// Merging all the same routes
router.route('/:id').get(getContactById).put(updateContact).delete(deleteContact);
// router.route('/:id').put(updateContact);
// router.route('/:id').delete(deleteContact);
module.exports = router;