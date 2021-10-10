const express = require("express");
const router = express.Router();




//Homepage
router.get('/index', (req, res, next) => {
    if (req) {
      res.status(200).json('Tiketti: Create Your Own Fun')
    }
  })