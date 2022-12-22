//console.log("Welcome to Node API Tutorial");
// npm install --save-dev nodemon
// npm install cors

const express= require("express");
const bodyParser= require("body-parser");
const cors= require("cors");

const app= express();

const port= 5000;

const Urlpth= require("./router");

app.use(bodyParser.json());
app.use(cors());

app.use("/", Urlpth);
app.use("/api/country", Urlpth);


app.listen(port, ()=>console.log("Server running on port 5000"));
