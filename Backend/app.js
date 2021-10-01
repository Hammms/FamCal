//imports
const express = require('express');
const mongoose = require('mongoose');
const day = require('./models/day');



const app = express();

//Connection and Config
mongoose.connect("'mongodb://localhost:27017/test")
.then(() => {
    console.log('Database Connected');
})
.catch(()=>{
    console.log('Database Connection Failed');
});

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
  });

//Routes
// app.get('/test', function (req, res) {
//     res.send(console.log('turbo'))
//   })

  app.get("/test", (req, res, next) => {
    day.find().then(documents => {
      res.status(200).json({
        message: "Posts fetched successfully!",
        day: documents
        
      });
    });
  });  

  app.post("/test", (req, res, next) => {
    const Day = new day({
      dates: req.body.dates
    });
    Day.save();
    res.status(201).json({
      message: "Post added successfully"
    });
  });

// Sign-up
app.post("/register-user", (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
      const user = new userSchema({
          name: req.body.name,
          email: req.body.email,
          password: hash
      });
      user.save().then((response) => {
          res.status(201).json({
              message: "User successfully created!",
              result: response
          });
      }).catch(error => {
          res.status(500).json({
              error: error
          });
      });
  });
});


module.exports = app;