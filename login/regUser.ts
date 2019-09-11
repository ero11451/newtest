import { logger } from "../logger";
// import { SHA256 } from "crypto-js"
const express = require('express')
const router = express.Router()
const userModel = require("../db/userModels");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
router.post("/", async(req, res, next)=>{
          
    const userName = req.body.userName ;
    const password  = req.body.password ;
    const email = req.body.email;

    const hashedPassword = bcrypt.genSalt(10, (err, salt)=>{
      bcrypt.hash(password,salt, (err,passhash)=>{
        return passhash
      })
    })

    await userModel.create({
          userName: userName, 
          email: email,
          password:hashedPassword})
    .catch(error => {
                logger.error(error)  
                res.send(`${error.message}`)
              })
    .then((user)=>{
                  
                 res.send(` user with the userName of ${user.userName} was created`)
               }
              )
 })

    

export const regUser = router;