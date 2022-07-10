const express= require("express");
const router= express.Router();

const {CreateStudentDetails,
    getStudentsDetails,
    UpdateStudentsDetails,
    getStudentDetailbyId,
    deleteStudentDetailsbyId}= require("../controllers/studentController");


 router.post("/", CreateStudentDetails);
 router.get("/show", getStudentsDetails);
 router.put("/update/:id",UpdateStudentsDetails);
 router.get("/show/:id",getStudentDetailbyId);
 router.delete("/delete/:id",deleteStudentDetailsbyId);



 module.exports= router;