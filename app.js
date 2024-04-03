const express = require('express')
const connectDB = require('./db') 
const mongoose = require('mongoose')
const body = require('body-parser')
const app = express()
const { MongoClient } = require('mongodb')
app.listen(3000, async () => {
    await connectDB();
    console.log(`http://localhost:3000`);
  });