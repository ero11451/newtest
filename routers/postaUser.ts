const express = require('express')
const router = express.Router()
const userModel = require("../db/userModels");
const faker = require('faker');

router.post("/",async (req, res, next)=>{
    const randomName = faker.name.findName();
    const firstName = req.body.firstName || randomName ;
    const lastName  = req.body.lastName || randomName ;
    const phoneNumber = req.body.phoneNumber;
    const Age  = req.body.Age;
    userModel.create({firstName: firstName, lastName: lastName,phoneNumber:phoneNumber,Age:Age}).catch(error => {
                   res.send(`${error}`)
              }).then(
                 res.send(`${firstName},${lastName},${phoneNumber},${Age}`)
              )
 })

export const postUser = router;