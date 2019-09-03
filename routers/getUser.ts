import { logger } from "../logger";

const express = require('express');
const router = express.Router();
const userModel = require("../db/userModels");

router.get("/" , async (req,res, next)=>{
  const user = await userModel.findAll()
      .catch(err => {
        logger.error(err)
        res.send(err)
    })
   res.send(user)
   next()
})
export const getUser = router;