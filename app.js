const express = require("express");
const app = express();
const path = require("path");
const PORT = 3030;

app.use (express.static(path.join(__dirname, "publics")));

app.get("/",(req,res)=> {
    res.sendFile(path.join(__dirname, "./DH-HEROES/views/index.html"))
})
app.get("/babbage",(req,res)=> {
    res.sendFile(path.join(__dirname, "./DH-HEROES/views/babbage.html"))
})
app.get("/berners-lee",(req,res)=> {
    res.sendFile(path.join(__dirname, "./DH-HEROES/views/berners-lee.html"))
})
app.get("/clarke",(req,res)=> {
    res.sendFile(path.join(__dirname, "./DH-HEROES/views/clarke.html"))
})
app.get("/hamilton",(req,res)=> {
    res.sendFile(path.join(__dirname, "./DH-HEROES/views/hamilton.html"))
})
app.get("/hopper",(req,res)=> {
    res.sendFile(path.join(__dirname, "./DH-HEROES/views/hopper.html"))
})
app.get("/lovelace",(req,res)=> {
    res.sendFile(path.join(__dirname, "./DH-HEROES/views/lovelace.html"))
})
app.get("/turing",(req,res)=> {
    res.sendFile(path.join(__dirname, "./DH-HEROES/views/turing.html"))
})


app.listen(PORT,()=>
console.log("servidor corriendo")
)
