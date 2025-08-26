const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const SignupUser = async (req, res) => {
  try {
    // const userData = new User(req.body);
    // const { email } = userData;
    // const existUser = await User.findOne({ email });
    const { name, email, password } = req.body;
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "User already exist" });
    }

     const hashedPassword = await bcrypt.hash(password, 10);
     const savedUser = new User({
      name,
      email,
      password: hashedPassword,
    });
     const newUser = await savedUser.save();
     res.status(201).json({ newUser});
    // const savedUser = await userData.save();
    // res.status(200).json(savedUser);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "User not exist" });
    }

    const isValidPassword = await bcrypt.compare(password, userExist.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "email or password invalid" });
    }
    const tokenExist = req.cookies.token;
    if(tokenExist){
      return res.status(400).json({message:"Already login"});
    }
    const token = jwt.sign({ userId: userExist._id,name:userExist.name }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
//  const userId = 123; // Get the user ID from your authentication logic

  // Create and sign the token
  // const token = jwt.sign({ userId }, process.env.JWT_SECRET );


    res.cookie("token", token, { httpOnly: true, maxAge: 3600000 });
    res.status(200).json({token });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// const getProfile = (req, res) => {
//    const userId = req.userId;
//    res.json({ userId, data: 'Protected data' });
//   res.status(200).json({ message: `Welcome, user ${req.userId}` });
// };
const getProfile = (req, res) => {
 
  return res.status(200).json({ message: `Welcome, ${req.user.name}! This is protected data` });
};


const logout  = async (req,res) =>{
  try {
    const tokenExist = req.cookies.token;
    if(!tokenExist){
      return res.status(400).json({message:"Login required"});
    }
    res.clearCookie("token");
    res.status(200).json({message:"Logout suucessfully"});
  } catch (error) {
    res.status(500).json({error:error})
  }
}
module.exports = {
  SignupUser,
  LoginUser,
  getProfile,
  logout
};
