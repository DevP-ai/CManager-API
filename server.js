const express = require('express');
const errorHandler = require('./middleware/errorhandler');
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes"));
app.use(errorHandler);


app.listen(PORT,()=>{
    console.log(`Server run at port ${PORT}`);
});