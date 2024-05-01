
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routs = require('./routs/postRoutes')
const authRoutes = require('./routs/userRouts');
const app = express();
const port = process.env.PORT;
const uri = process.env.MONGODB_URI;

//connect databse
mongoose
  .connect(uri)
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.log('Error connecting to database: ', error);
  });


// Middleware 
app.use(express.json());

// Use authentication routes
app.use('/nod', authRoutes);


//run the server 
app.use(express.json())
app.use('/', routs)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});






