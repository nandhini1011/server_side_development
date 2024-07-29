//importing dependencies
const express = require("express");

//setting up express app
const app =express();

//Define port
const PORT = 8080

app.get("/home",(req,res) => {
    res.send("Welcome to the QuotesWorld.!!!");
    console.log(req.method);
});

app.get("/quotes",(req,res) => {
    res.send("Display all Quotes.");
    console.log(req.method);
});

app.get("/quotes/:id",(req,res) => {
    res.send("Diaplay a Particular Quote.");
    console.log(req.method);
});

app.post("/quotes",(req,res) => {
    res.send("Save a New Quote.");
    console.log(req.method);
});

app.patch("/quotes/:id",(req,res) => {
    res.send("Edit a Particular Quote.");
    console.log(req.method);
});

app.delete("/quotes/:id",(req,res) => {
    res.send("Delete a Particular Quote.");
    console.log(req.method);
});

app.listen(PORT, () => {
    console.log(`Dashboard => listening to ${PORT}`);
});