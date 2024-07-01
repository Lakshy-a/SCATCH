const express = require('express');
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("This is the home route of ownersRouter...");
})

module.exports = router;