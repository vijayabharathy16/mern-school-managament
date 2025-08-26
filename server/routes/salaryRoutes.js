const express = require ('express');
const { addUser, getAllUser, getSingleSalary, salaryUpdatedUser,deleteSalary } = require('../controllers/salaryController');



const router = express.Router();

router.post('/addSalary', addUser );
router.get('/allSalary', getAllUser );
router.get('/getOneSalary/:id', getSingleSalary);
router.put('/updateSalary/:id', salaryUpdatedUser);
router.delete('/deleteSalary/:id', deleteSalary);



module.exports = router;