const mysql=require("mysql2");

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"nike_db"
})
connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("mysql is finally connected");
})
module.exports=connection;