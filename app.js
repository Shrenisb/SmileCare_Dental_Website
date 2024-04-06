const express = require('express')
const connectDB = require('./db') 
const mongoose = require('mongoose')
const body = require('body-parser')
const app = express()
const { MongoClient } = require('mongodb')

const handlebars = require("express-handlebars");
//Sets our app to use the handlebars engine
app.set("view engine", "handlebars");
//Sets handlebars configurations (we will go through them later on)
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(express.static('public', { setHeaders: (res, path) => {
  if (path.endsWith('.png')) {
    res.setHeader('Content-Type', 'image/png');
  }
}}));  

app.listen(3000, async () => {
    await connectDB();
    console.log(`http://localhost:3000`);
  });