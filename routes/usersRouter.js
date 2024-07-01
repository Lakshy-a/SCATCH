const express = require("express");
const router = express.Router();

router.use('/', (req, res)=>{
    res.send("This is the home route of usersRouter...");
})

module.exports = router;