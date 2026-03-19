const express=require('express');
const cors=require('cors');
const db=require('./db');

const app=express()
app.use(cors());
app.use(express.json());

app.get("",(req,res)=>{
    const sql = "SELECT * FROM users";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
})
})
app.listen(5000, () => {
  console.log("Server running on port 5000");
});