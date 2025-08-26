const mongoose = require('mongoose');



const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;


// mongoose.connect(process.env.MONGO_URL)
// .then(() =>{
//     console.log('Connected to MongoDB...');
// }).catch((err) =>{
//     console.log('Connection err:', err);
// })


// const MONGOURL = process.env.MONGO_URL;
// mongoose.connect(MONGOURL);
// const conn = mongoose.connection;
// conn.once('open', () => {
//     console.log('Connected')
// })
// const connectedDB = async () =>{
//     try {
//         await mongoose.connect(`${process.env.MONGO_URI}`);
//         console.log('connected db')
//     } catch (error) {
//         console.log(error)
//     }
// }
// connectedDB();


// dbConnect();
// async function dbConnect() {
//   try {
//     await mongoose.connect(
//         `${process.env.MONGO_URI}`,
//       { useNewUrlParser: true }
//     );
//     console.log("MongoDb connected successfully");
//   } catch (error) {
//     console.log("MongoDb connection failed");
//   }
// }
// module.exports = mongoose;

