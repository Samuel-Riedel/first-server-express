import express from "express";
const app = express();
const port = 3000
const contact = "Samuel Riedel, Phone Number is +34 555 555 555"

app.get("/", (req, res)=>{
    res.send("Hello World")
});

app.get("/contact", (req, res)=>{
    res.send(`Hello my name is: ${contact}`)
});

app.listen(3000, ()=> {
    console.log(`The server is running on port ${port}.`)
})

