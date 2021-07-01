const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");
const User = require("../models/user");

router.get("/", async (req, res) => {
    console.log(await Movie.find({}));
    console.log(await User.find({}));    
    res.status(201).send("shown");
}
)
module.exports = router;