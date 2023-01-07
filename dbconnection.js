const sqlconnection= require("mysql");

const sqldbconnection= sqlconnection.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"nodeapitutorial",
  multipleStatements:true
});
sqldbconnection.connect((err)=>{
    if(!err)
    {
    console.log("Database Connected");
    } else{
        console.log("Database Not Connected");    
    }

});

module.exports= sqldbconnection;
