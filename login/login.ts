import { logger } from "../logger";

// import { logger } from "../logger";

// import { SHA256 } from "crypto-js"

const express = require('express');
const router = express.Router();
const userModel = require("../db/userModels");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

router.post("/" , async (req,res, next)=>{
    const userName = req.body.userName ;
    const password  = req.body.password ;
    const email = req.body.email; 

    const user = await userModel.findOne({ where: {userName} })
      .catch(error => {
        logger.error(error)  
        res.send(`${error.message}`)
      })
      const match = bcrypt.compare(password, user.password);
      if(match) {
          const token = jwt.sign({ user}, 'muyi');
          res.send(token)
       }
  
})
            
export const loginUser = router;