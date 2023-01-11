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
    dbconnected.query("select * from tbl_state where countryid='"+req.params.id +"'   ", (err, rows)=>{
     
        if(!err)
        {
        res.send(rows);
        } else{
            console.log(err);
        }
    });

});


Router.get("/api/countrystate",(req, res)=>{
    var sql = "SELECT * FROM tbl_country";
    dbconnected.query(sql, (err, rows)=>{
     
        if(!err)
        {
        res.send(rows);
        } else{
            console.log(err);
        }
    });

});


Router.post("/api/adduser", (req, res)=>{
    const username= req.body.username;
    const email= req.body.email;
    const phone= req.body.phone;
    const address= req.body.address;
    const status= req.body.status;
    var sql= `INSERT INTO tbl_user(username, email, phone, address, status) 
    VALUES("${username}", "${email}","${phone}", "${address}", "${status}" )`;
    dbconnected.query(sql, (err, result)=>{
        if(!err)
        {
        res.status(200).json({success:"User Record Inseted Successfully"});
        } else{
            console.log(err);
        }

    });

});





module.exports= Router;
