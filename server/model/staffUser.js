const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({

    name:{type:'string', require:true},
    email:{type:'string', require:true,unique: true},
    phoneno:{type:'string', require:true},
    address:{type:'string', require:true},
    district:{type:'string', require:true},
    state:{type:'string', require:true}
});

module.exports = mongoose.model('staffUsers',staffSchema );