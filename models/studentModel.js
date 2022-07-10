const mongoose= require("mongoose");

const studentSchema= new mongoose.Schema({


    name: {


        type: String,
        required: true,
    },

    age: {


        type: String,
        required: true,
    },

    fees: {
      
        type: mongoose.Decimal128,
        required: true,
        validate: (value)=> value >= 4000.50


    }



})


const studentData= mongoose.model("student",studentSchema);

module.exports= studentData;




