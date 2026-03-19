const mysql=require("mysql2");

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:""
})
connection.connect((err)=>{
    if(err){
        console.log("mysql connection failed!");
        return;
    }
    console.log("mysql is finally connected");
})
module.exports=connection;