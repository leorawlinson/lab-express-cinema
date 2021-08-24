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

router.get("/:id", (req, res, next) => {})
module.exports = router;