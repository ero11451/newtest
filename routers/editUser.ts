const express = require('express')
const router = express.Router()
const userModel = require("../db/userModels");

router.put("/", async (req,res,next,)=>{
    const firstName = req.body.firstName ;
    const lastName  = req.body.lastName  ;
    const phoneNumber = req.body.phoneNumber;
    const Age  = req.body.Age;
   await userModel.update({firstName: firstName, lastName: lastName,phoneNumber:phoneNumber,Age:Age}, 
        {where: {deletedAt:{firstName: firstName}}
      }).catch(error => {
        res.send(`${error}`)
   }).then(
        res.send(`${firstName} was updated  thank vary much`)
   )
    })

export const editUser = router;