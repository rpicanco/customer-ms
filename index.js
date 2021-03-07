const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const customerRoutes = require('./routes/customer');

const app = express();

// Parse application/json
app.use(bodyParser.json());

app.use('/api', customerRoutes);

app.use((error, req, res, next) => {    
    const statusCode = error.status_code || 500;    
    const code = error.code || "internal-error";
    const detail = error.detail;
    res.status(statusCode).json({ code: code, details: detail });
  });

  mongoose.connect(
    'mongodb+srv://roberto:roberto1234@mycluster.udvwy.mongodb.net/customer?retryWrites=true&w=majority'
  )
  .then(result => {
    app.listen(8080);
  })
  .catch(err => console.log(err)); 