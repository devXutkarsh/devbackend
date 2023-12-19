require('dotenv').config()
const express= require('express')
const app= express()

 const port= 5000
 app.get('/', (req, res)=>{
  res.send("hello")
 })

 app.get('/twitter' ,(req, res)=>{
  res.send('<h1> Utkarsh Dixit </h1>')
 })

 app.get('/youtube', (req, res)=>{
  res.send('<h2> I am learning backend devlopment </h1>')
 })
 app.get('/me', (req, res)=>{
  res.send('<h2> me </h1>')
 })
 app.listen(process.env.PORT, ()=>{
  console.log(`example app listening on ${port}`)
 })