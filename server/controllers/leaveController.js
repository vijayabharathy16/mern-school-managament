const userLeave = require('../model/leaveUser');

const addUser = async (req,res) =>{
    try {
        const{staffname,leavetype,startdate,enddate,reason,status} = req.body;
        const newUser = new userLeave({staffname,leavetype,startdate,enddate,reason,status});
        await newUser.save();
        res.status(200).json({newUser});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

  const getAllUser = async(req,res) => {
    try {
       const AllUser = await userLeave.find();
       res.status(200).json(AllUser);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
  }  

   const getSingleLeave = async (req,res) => {
      try {
        const {id} = req.params;
        const user = await userLeave.findById(id);
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({error:error.message});
      }
   }
  
   const updateLeaveUser = async (req,res) => {
     try {
        const {id} = req.params;
        const user = req.body;
        const editUser = await userLeave.findByIdAndUpdate(id,user,{
           new:true,
        });
        res.status(200).json({message:"Updated Successfully"})
     } catch (error) {
        res.status(200).json({error:error.message});
     }
   }

   const deleteLeaveUser = async (req,res) => {
    try {
        const {id} = req.params;
        await userLeave.findByIdAndDelete(id);
        res.status(200).json({message:"Deleted Successfully"});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
   }


module.exports = {addUser,getAllUser,getSingleLeave,updateLeaveUser,deleteLeaveUser};