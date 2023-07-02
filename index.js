const express = require("express")
const app = express()

const jwt = require("jsonwebtoken")

app.get("/token", (req, res)=>{
    const token = jwt.sign({"shree":"ram"}, "jayshreeram", {expiresIn:'15m'})
    res.send({"token":token})
})

app.get("/authenticate", (req,res)=>{
    console.log(req.headers.authorization)
    res.send({"shree":"ram"})
})

app.listen(8080)