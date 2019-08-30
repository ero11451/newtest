const express = require('express');
const router = express.Router();
const userModel = require("../db/userModels");

router.get("/" , async (req,res, next)=>{
  const user = await userModel.findAll()
      .catch(err => {
        console.log(err)
        res.send(user)
    })
    res.send(user)
   next()
})
export const getUser = router;