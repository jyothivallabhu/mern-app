const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
   res.send('Api Testing')
})

const PORT = process.env.PORT || 5000; 

app.listen(PORT, console.log( `server is now running on port ${PORT}` ));