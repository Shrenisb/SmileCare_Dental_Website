const express = require('express')
const connectDB = require('./db') 
const mongoose = require('mongoose')
const app = express()
const { MongoClient } = require('mongodb')
const { Book } = require('./model')

app.use(express.static('.'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/insert.html',(req,res) => {
  const Booking = new Book({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message
  })
  console.log(req.body)
  Booking.save()
  res.redirect('/book.html')
})

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

app.get('/blog1.html',(req,res) => {
  res.sendFile('blog1.html')
});

app.get('/blog2.html',(req,res) => {
  res.sendFile('blog2.html')
});

app.get('/blog3.html',(req,res) => {
  res.sendFile('blog3.html')
});

app.get('/blog4.html',(req,res) => {
  res.sendFile('blog4.html')
});

app.listen(3000, async () => {
    await connectDB();
    console.log(`http://localhost:3000`);
  });