//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
    res.status(200).send('Get all contacts')
};

//@desc Get Individual contacts
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
    res.status(200).send(`Get contact for ${req.params.id}`)
};

//@desc Create New contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
    const {name, email, phone} = req.body;
    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("All Field Are Required!")
    }else{
        console.log("The request body is : ",req.body);
    }
    res.status(201).send('create contact')
};

//@desc PUT contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).send(`Update contact for ${req.params.id}`)
};

//@desc Delete contacts
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).send(`Delete contacts for ${req.params.id}`)
};

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };