const express = require("express");
const path = require('path');
const app = express();
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/gudmusic', (req, res) => {
  res.sendFile(path.join(__dirname + '/gudmusic.html'));
});

app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname + '/game.html'));
});

app.listen(3000);
console.log("Running at port 3000");
