const express = require('express');

const router = express.Router();
 
 
const { createUser, getAllUsers, getOneUser, updateOne, deleteOne } = require('../controllers/user');
const { createSale, getAllSale, getOneSale,} = require('../controllers/sales');

// User route
router.post('/user', createUser);
router.get('/user', getAllUsers);
router.get('/user/:id', getOneUser);
router.put('/user/:id', updateOne);
router.delete('/user/:id', deleteOne);


//sales route
router.post('/sale', createSale);
router.get('/sale', getAllSale);
router.get('/sale/:id', getOneSale);
router.put('/sale/:id', updateOne);
router.delete('/user/:id', deleteOne);


module.exports = router;