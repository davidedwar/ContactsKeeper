const express = require('express');
const router = express.Router();

// get all contacts
router.get('/', (req, res) => {
    res.send('get all contacts');
});

// add a contact 
router.get('/', (req, res) => {
    res.send('add a contact');
});

//update contact 
router.put('/:id', (req, res) => {
    res.send('update contact');
});



//delete contact 
router.delete('/:id', (req, res) => {
    res.send('delete a contact');
});





module.exports = router;    