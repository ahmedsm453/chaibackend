//common js and module js
//for .env
require ('dotenv').config()
const express = require('express')
//import express from "express"

const app = express() 
//alot availability within app


//near to 65000 virtual ports

app.get('/', (req, res) => {
  res.send('hello you have reached the "/" page')
})
app.get('/twitter', (req, res) => {
    res.send('hello you have reached the twitter page')
})
//not necissary to send only string
//html item can also be send
//we will send an <h1> tag
app.get('/login',(req,res)=>{
    res.send('<h1>Ribat</h1>')
})
//if we update the file on the server we have to restart the server each time as hot reloading not currently runnning
//proccessing needs to be done to resend new code on server
app.get('/chai',(req,res)=>{
    res.send('<h2>hello my name is ahmed</h2>')
})
app.get('/hellopeople',(req,res)=>{
    res.send('my people my name is ahmed')
})
app.get('/haha',(req,res)=>{
    res.send('my name is indeed not ahmed')
})
//replacing "port" to process.env.PORT
//PORT came from the ".env" file
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})