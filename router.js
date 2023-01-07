const express= require("express");
const Router= express.Router();

const dbconnected= require("./dbconnection");

Router.get("/",(req, res)=>{
    const data=[{name:"David Test",email:"john007@gmail.com"}];
    res.send(data);
});

Router.get("/api/user",(req, res)=>{
    dbconnected.query("select * from tbl_user", (err, rows, fields)=>{
        if(!err)
        {
        res.send(rows);
        } else {
            console.log(err);
        }
    })
})

Router.get("/api/country", (req, res)=>{
    dbconnected.query("select * from tbl_country",(err, rows)=>{
        if(!err){
        res.send(rows);
        } else{
            console.log(err);
        }
    });

});

Router.get("/api/state/:id",(req, res)=>{
    dbconnected.query("select * from tbl_state where countryid='"+req.params.id +"' ", (err, rows)=>{     
        if(!err)
        {
        res.send(rows);
        } else{
            console.log(err);
        }
    });
});

module.exports= Router;