import { logger } from "../logger";


const express = require('express');
const router = express.Router();
const userModel = require("../db/userModels");

router.get("/:user" , async (req,res, next)=>{
    const userId = await req.params.user;
    await userModel.findOne({ where: {id: userId} })
    .then((user =>{
        logger.info(user)
        res.send(user)
      
    }))
    .catch(err =>{
        console.log(err)
    })
   next()
})
            

export const getOneUser = router;