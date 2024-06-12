const express = require("express");
const router = express.Router();

router.get('/', (req,res)=>{
    res.send("Article Route get");
});

router.post('/', (req,res)=>{
    res.send("Article Route post");
});

module.exports = router;