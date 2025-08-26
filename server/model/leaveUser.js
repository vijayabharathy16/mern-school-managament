const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
    staffname:{type:'string', require:true},
    leavetype:{type:'string', require:true},
    startdate:{type:'string', require:true},
    enddate:{type:'string', require:true},
    reason:{type:'string', require:true},
    status:{type:'string', require:true},
});

module.exports = mongoose.model('leaveDetails', leaveSchema);