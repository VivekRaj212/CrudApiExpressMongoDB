const express= require("express");
require("dotenv").config();
const app= express();
const connectd= require("./db/connection");
const router= require("./routes/web");
const port= process.env.PORT || 8080
const MONGO_URL= process.env.MONGO_URL || 'mongodb://localhost:27017'



app.use(express.json());

app.use("/student",router);





app.listen(port,()=> {

    connectd(MONGO_URL);
    console.log(`Server running at http://localhost:${port} `)
})