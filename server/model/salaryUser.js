const mongoose = require ('mongoose');

const salarySchema = new mongoose.Schema({
     department:{type:'string', require:true},
     staff:{type:'string',require:true},
     basicsalary:{type:'string',require:true},
     allowances:{type:'string',require:true},
     dedication:{type:'string',require:true},
     paydate:{type:'string',require:true}
});

module.exports = mongoose.model('salaryDetails', salarySchema);