import { logger } from "../logger/index";

const express = require('express')
const router = express.Router()
const userModel = require("../db/userModels");
const faker = require('faker');


router.put("/:user", async (req,res,next,)=>{
     
    const randomName = faker.name.findName();
    const firstName = req.body.firstName || randomName;
    const lastName  = req.body.lastName || randomName  ;
    const phoneNumber = req.body.phoneNumber;
    const Age  = req.body.Age;
    const userId = req.params.user;
   await userModel.update({
               firstName: firstName,
               lastName: lastName,
               phoneNumber:phoneNumber,
               Age:Age
               },{
                    where: {id:userId}  
               }).catch(error => {
               res.send(`${error}`)
               logger.error(error)
          })
      res.send(`user with the id of ${userId} has being updated`)
          
    })

export const editUser = router;