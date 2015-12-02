'use strict'
const express = require('express'),
      app = express(),
      logger = require('morgan'),
      fs = require('fs'),
      bcrypt = require('bcrypt'),
      request = require('request'),
      mongoose = require('mongoose');
  //mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/click_redux');




app.use('/scripts', express.static(__dirname + '/node_modules/angular'));
app.use('/scripts', express.static(__dirname + '/node_modules/underscore'));

app.use(express.static('public'));

const server = app.listen(4000, () => {
  console.log('server online');
})
