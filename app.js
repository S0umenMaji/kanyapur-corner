const express = require("express");


const app = express();


app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get('/', (req,res) => {
  res.render('index');
});

app.get('/about', (req,res) => {
  res.render('about');
});


app.get('/teacher', (req,res) => {
  res.render('teacher');
});

app.get('/1styear', (req,res) => {
  res.render('1styear');
});



app.listen(3000, function(){
  console.log("successfully started at port 3000");
});
