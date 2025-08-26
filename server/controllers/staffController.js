const userStaff = require('../model/staffUser');

//-----------add User---------------------
const addUser = async (req,res) =>{
    try {
        const {name, email,phoneno,address,district,state} = req.body;
        const newUser = new userStaff({name,email,phoneno,address,district,state});
        // console.log(newUser);
        await newUser.save();
        res.status(200).json({newUser});
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

//---------------- getAllUser----------------------------------------------------
const getAllUser = async (req,res) =>{
    try {
        const AllUser = await userStaff.find();
        res.status(200).json(AllUser)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};


//-------------------------getSingleUser--------------------------

const getSingleUser = async (req,res) =>{
   try {
    const {id} = req.params;
    const user = await userStaff.findById(id);
    res.status(200).json(user);
   } catch (error) {
    res.status(500).json({error:error.message});
   }
}

//----------------------UpdateUser-----------------------------

const updateUser = async (req,res) => {
    try {
        const {id} = req.params;
        const user = req.body;
        const editUser = await userStaff.findByIdAndUpdate(id,user,{
            new:true,
        });
        res.status(200).json({message:"updated"});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

//------------------deleteUser-------------------------------

const deleteUser = async (req,res) => {
    try {
        const {id} = req.params;
        await userStaff.findByIdAndDelete(id);
        res.status(200).json({message:"Deleted successfull"});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {addUser,getAllUser,getSingleUser,updateUser,deleteUser};


