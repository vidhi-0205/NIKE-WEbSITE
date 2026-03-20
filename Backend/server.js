const express = require("express");
const cors = require("cors");
const db = require("./db");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/nikewebsitedb",
  express.static(path.join(__dirname, "../nikewebsitedb"))
);

app.get("/collection", (req, res) => {
  const sql = "SELECT * FROM collection LIMIT 3";

  db.query(sql, (err, result) => {
    if (err) return res.json(err);
    res.json(result);
  });
});

app.get("/collection/all", (req, res) => {
  const sql = "SELECT * FROM collection";

  db.query(sql, (err, result) => {
    if (err) return res.json(err);
    res.json(result);
  });
});


// ---------- SERVER ----------
app.listen(5000, () => {
  console.log("server running on port 5000");
});