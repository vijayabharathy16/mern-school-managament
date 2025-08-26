// const mongoose = require('../config/dbConfig');
const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    
        name:{type:'string', required:true},
        email:{type:'string', required:true,unique: true},
        password:{type:'string', required:true},
       
})

module.exports = mongoose.model('usercollections', UserSchema);