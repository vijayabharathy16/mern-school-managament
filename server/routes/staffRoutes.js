const express = require('express');

const {addUser, getAllUser, getSingleUser, updateUser,deleteUser} = require('../controllers/staffController');



const router = express.Router();

router.post('/addStaff', addUser);
router.get('/allStaff', getAllUser);
router.get('/getSingle/:id', getSingleUser);
router.put('/updatedUser/:id', updateUser);
router.delete('/deletedUser/:id', deleteUser);

module.exports = router;