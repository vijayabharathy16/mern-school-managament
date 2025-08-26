const  userSalary = require('../model/salaryUser');


const addUser = async(req,res) => {
    try {
        const{department,staff,basicsalary,allowances,dedication,paydate} =req.body;
        const newUser = new userSalary({department,staff,basicsalary,allowances,dedication,paydate});
        await newUser.save();
        res.status(200).json({newUser});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

const getAllUser = async(req,res) => {
    try {
        const AllUser = await userSalary.find();
        res.status(200).json(AllUser);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}



const getSingleSalary = async (req,res) => {
    try {
        const {id} = req.params;
        const user = await userSalary.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}


const salaryUpdatedUser = async(req,res) =>{
    try {
        const {id} = req.params;
        const user = req.body;
        const editUser = await userSalary.findByIdAndUpdate(id,user,{
            new:true,
        });
        res.status(200).json({message:"updated"});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

const deleteSalary = async (req,res) => {
    try {
        const {id} = req.params;
        await userSalary.findByIdAndDelete(id);
        res.status(200).json({message:"Deleted Successfully"})
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}







module.exports = {addUser,getAllUser,getSingleSalary,salaryUpdatedUser,deleteSalary}