const express = require('express');
const router = express.Router();
const Movie = require('../models/movie')

router.get('/', async (req,res) => {

const clearMovie = async () => {
    await Movie.deleteMany({});
    console.log("test");
    console.log(await Movie.find({}));
    console.log("test");
  };
  
  const moviesArray = [
    { name: "godfather", genra: "crime" },
    { name: "shawshank", genra: "crime" },
    { name: "bambi", genra: "disney" },
    { name: "iron man", genra: "marvle" },
  ];
  const createMovies = async () => {
    for (let movie of moviesArray) {
      let moviedb = new Movie(movie);
      await moviedb.save();
    }
    console.log(await Movie.find({}));
  };
  
  const deleteCreate = async () => {
    await clearMovie();
    await createMovies();
  };
  deleteCreate();

  res.status(201).send("moviecreated");
});

  module.exports = router;