const express = require('express')
const router = express.Router()
const userModel = require("../db/userModels");
const faker = require('faker');


router.delete("/:user", async (req,res,next,)=>{
    const userId = req.params.user;
   await userModel.destroy({where: {id:userId}
  }).catch(error => {
               res.send(`${error}`)
          })
      res.send(`user with the id of ${userId} has being deleted`)

    })
   
export const deleteUser = router;