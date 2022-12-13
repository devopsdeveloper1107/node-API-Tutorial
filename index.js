///console.log("Welcome to Node API Tutorial");

const express= require("express");
const bodyParser= require("body-parser");

const app= express();

const port= 5000;

const Urlpth= require("./router");

app.use(bodyParser.json());

app.use("/", Urlpth);

app.listen(port, ()=>console.log("Server running on port 5000"));
