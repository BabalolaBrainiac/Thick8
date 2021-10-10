const express = require("express");
const router = express.Router();

//Test Routes

router.get("/new", (req, res, next) => {
  const data = {
    name: "Babalola Opeyemi Daniel",
    gender: "Male",
    Age: 25,
    Test: "Yes",
  };
  console.log(data);
  res.status(200).json(data);
});
//Test Routes End


//Application Routes
module.exports = router;
