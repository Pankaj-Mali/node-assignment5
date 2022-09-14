 const express = require("express");

 const app= express();

 app.get("/welcome", (req,res)=>{

   res.setHeader('Containt-Type','text/plain');

    res.status(200).send("Welcome to Dominos! ")
 });

 app.get("/contact", (req,res)=>{

   res.setHeader('Containt-Type','application/json');

    res.status(200).json({
    phone: '18602100000',
    email: 'guestcaredominos@jublfood.com' })
 })

 app.get("*", (req,res)=>{

    res.status(404).send(" 404 Page is not available")
 })

app.listen(8081,()=>{

    console.log("server is up")
});




