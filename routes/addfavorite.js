const express = require("express");
const router = express.Router();
// const Movie = require("../models/movie");
const User = require("../models/user");

router.post("/", async (req, res) => {
    console.log(req.body.username)
    // let user = new 
    // let user = 
    await User.updateOne({name:req.body.username},{$addToSet:{favorites:req.body.moviename}})
    // user.raw
    // console.log(User.raw)
    // user.save();  
    res.status(201).send("added");
}
)
module.exports = router;