const express = require('express');
const router = express.Router();
const userModel = require("../db/userModels");

router.get("/" , (req,res, next)=>{
    userModel.findAll().then((user) => {
        res.send({user})
    }).catch(err => {
        console.log(err)
    })
   next()
})
export const getUser = router;