const express = require('express');
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 3000;
const app = express();


app.use("/api/contacts",require("./routes/contactRoutes"));


app.listen(PORT,()=>{
    console.log(`Server run at port ${PORT}`);
});