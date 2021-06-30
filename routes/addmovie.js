const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");
// const User = require("../models/user");

router.post("/", async (req, res) => {
    let movie = new Movie({name:req.body.name,genra:req.body.genra});
    movie.save();  
    res.status(201).send("added");
}
)
module.exports = router;