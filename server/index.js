const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mongoose = require ('mongoose');
const cookieParser = require('cookie-parser')
const connectDB = require('./config/dbConfig');
const route = require('./routes/authRoutes');
const UserRoutes = require('./routes/authRoutes');
const StaffRoutes = require('./routes/staffRoutes');
const SalaryRoutes = require('./routes/salaryRoutes');
const LeaveRoutes = require('./routes/leaveRoutes');
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 4000;

//---------db connection--------//
connectDB();
//------------------------------
// -------middleware----------

app.use(express.json())
app.use(bodyParser.json())
app.use(cors());
app.use(cookieParser());

app.listen(PORT,() =>{
    console.log(`Server running on http://localhost:${PORT}`)
});

app.use('/auth/api', UserRoutes);

app.use('/api/staff', StaffRoutes);

app.use('/api/salary', SalaryRoutes ); 

app.use('/api/leave', LeaveRoutes ); 