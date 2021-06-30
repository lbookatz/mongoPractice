const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");
const User = require("../models/user");

router.get("/", async (req, res) => {
  const moviesArray = [
    { name: "godfather", genra: "crime" },
    { name: "shawshank", genra: "crime" },
    { name: "bambi", genra: "disney" },
    { name: "iron man", genra: "marvle" },
  ];

  const userArray = [
    { name: "Lance", email: "l@book" },
    { name: "Jeremy", email: "j@eremy" }
  ];

  const clearMovie = async (obj) => {
    await obj.deleteMany({});
  };

  const createMovies = async (obj,testArray) => {
    for (let movie of testArray) {
      let db = new obj(movie);
      await db.save();
    }
    console.log(await Movie.find({}));
    console.log(await User.find({}));
  };

  const deleteCreate = async () => {
    await clearMovie(Movie,moviesArray);
    await createMovies(Movie,moviesArray);
    await clearMovie(User,userArray);
    await createMovies(User,userArray);

  };
  deleteCreate();

  res.status(201).send("moviecreated");
});

module.exports = router;
