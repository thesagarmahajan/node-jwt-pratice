const express = require("express")
const {verify} = require("./jwt")
const app = express()

const jwt = require("jsonwebtoken")

app.get("/token", (req, res)=>{
    
    const token = jwt.sign({"shree":"ram"}, "jayshreeram", {expiresIn:'1m'})
    res.send({"token":token})
})

app.get("/getdata", (req,res)=>{
    let authHeader= req.headers.authorization;
    tokenInfo = verify(authHeader)
    if(tokenInfo.isValid){
        console.log("ok")
        res.status(tokenInfo.status).send(tokenInfo)
    }
    else{
        console.log("Not Ok")
        res.status(tokenInfo.status).send(tokenInfo)
    }
    
})



app.listen(8080)