const express = require("express");
const Movie = require("../models/Movie.model");
const router = express.Router();

router.get("/", (req, res, next) => {
Movie.find()
    .then((allMovies) => {
        console.log("Here are all your movies", allMovies)
        res.render("movies/list", {allMovies})
    })
    .catch((err) => {
      console.log(err);
    });
})

router.get("/:id", (req, res, next) => {
    const {id} = req.params;
    Movie.findById(id)
    .then((movie) => {
        console.log("Here is your movie", movie)
        res.render("movies/details", {movie})
    })
     .catch((err) => {
      console.log(err);
    });
})
module.exports = router;