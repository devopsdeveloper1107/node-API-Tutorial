const express= require("express");

const Router= express.Router();

Router.get("/",(req, res)=>{
    const data=[{name:"john USA",email:"john007@gmail.com"}];
    res.send(data);
});

module.exports= Router;