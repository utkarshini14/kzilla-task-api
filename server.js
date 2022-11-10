const express = require("express");

const app = express();
app.use(express.json());
const movies=[{title:'yjhd',year:2014},{title:'ajbg',year:2008}];
app.get("/", (req, res) => {
  res.json(movies);
});
app.post("/", (req, res) => {
    movies.push(req.body)
    res.send("updated successfully");
  });



app.listen(3000, () => {
  console.log("Server Listening on port 3000");
});