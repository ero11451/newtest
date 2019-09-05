// import { logger } from "../logger";

import { SHA256 } from "crypto-js"

const express = require('express');
const router = express.Router();
const userModel = require("../db/userModels");
const jwt = require("jsonwebtoken")

router.post("/" , async (req,res, next)=>{
    const userName = req.body.userName ;
    const password  = req.body.password ;
    const hashedPassword = SHA256(password).toString()
    const email = req.body.email;
    await userModel.findOne({ where: {userName:userName, password:hashedPassword,email:email }})
    .then((user) => {
    if(!user){
        res.send("user was not found please register")
    }else{
        jwt.sign({user}, "muyiistheboss", (err , token)=>{
            res.json({token})
        })
    }
   
}).catch(err =>{
        console.log(err)
    })
    
   next()
})
            

export const loginUser = router;