const express = require('express');
const { addUser, getAllUser, getSingleLeave, updateLeaveUser, deleteLeaveUser } = require('../controllers/leaveController');


const router = express.Router();

router.post('/addleave', addUser);
router.get('/allLeave', getAllUser);
router.get('/getOneleave/:id', getSingleLeave);
router.put('/updatedLeave/:id', updateLeaveUser);
router.delete('/deleteLeave/:id', deleteLeaveUser);

module.exports = router;