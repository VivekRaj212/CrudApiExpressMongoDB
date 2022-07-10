const mongoose= require("mongoose");

const connectdb= async (MONGO_URL)=> {

     try {

        const DB_OPTIONS= {


            dbName: "school"
        }

        await mongoose.connect(MONGO_URL,DB_OPTIONS);
        console.log("mongoDB Connected Successfully");

     }

     catch(err) {

        console.log(err)



     }



}


module.exports= connectdb;