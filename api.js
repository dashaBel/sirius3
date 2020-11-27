const express = require("express");
const router = express.Router();

router.get("/sirius", (req, res)=>{
  res.send({method: "GET"});
});

router.post("/sirius", (req, res)=>{
  res.send({method: "POST"});
});

router.put("/sirius/:id", (req, res)=>{
  res.send({method: "PUT"});
});

router.delete("/sirius/:id", (req, res)=>{
  res.send({method: "DELETE"});
});

module.exports = router;