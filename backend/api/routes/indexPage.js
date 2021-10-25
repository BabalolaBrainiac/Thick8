const express = require("express");
const router = express.Router();
const User = require('../models/users')


//Homepage
router.get('/', async (req, res, next) => {
  const {username, email} = req.body
  await User.find(email).exec().then((user) => {
    
    console.log(user)
  }).catch(err)

  })  

  module.exports = router;