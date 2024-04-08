const express = require('express')
const connectDB = require('./db') 
const mongoose = require('mongoose')
const body = require('body-parser')
const app = express()
const { MongoClient } = require('mongodb')

app.use(express.static('.'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/',(req,res) => {
  res.sendFile('index.html')
});

app.get('/book.html',(req,res) => {
  res.sendFile('book.html')
});

app.use(express.static('public', { setHeaders: (res, path) => {
  if (path.endsWith('.png')) {
    res.setHeader('Content-Type', 'image/png');
  }
}}));  

app.get('/blog.html',(req,res) => {
  res.sendFile('blog.html')
});

app.listen(3000, async () => {
    await connectDB();
    console.log(`http://localhost:3000`);
  });