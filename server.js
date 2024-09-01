const express = require('express');
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 3000;
const app = express();


app.get('/',(req,res)=>{
    res.send("Response from server");
});

app.get("/api/contacts",(req,res)=>{
    // res.send("Get All Contacts");
    res.status(200).json({contacts:["9811123456","8723573456","8934265789"]});
});


app.listen(PORT,()=>{
    console.log(`Server run at port ${PORT}`);
});