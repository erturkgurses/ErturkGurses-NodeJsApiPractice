const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const VisitedPlace = require("../models/visitedPlace");
const ToVisitPlace = require("../models/toVisitPlace");
const toVisitPlace = require("../models/toVisitPlace");

//visited Methods

//Gel all visited places
router.get("/visited", function (req, res) {
  VisitedPlace.find()
    .then((places) => {
      res.status(200).json({
        message: "All visited places are fetched.",
        places: places,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

//Get visited place by id
router.get("/visited/:placeID", function (req, res) {
  const id = req.params.placeID;
  VisitedPlace.findById({
    _id: id,
  })
    .then((place) => {
      res.status(200).json({
        message: "Visited place is fetched.",
        place: place,
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//Create a new visited place
router.post("/visited", function (req, res) {
  const {
    name,
    isOutdoor,
    adress,
    lastVisitDate,
    willingnessScoreToVisitAgain,
    numberOfVisit,
    lastScore,
    note,
  } = req.body;

  const newVisitedPlace = new VisitedPlace({
    _id: new mongoose.Types.ObjectId(),
    name: name,
    isOutdoor: isOutdoor,
    adress: adress,
    lastVisitDate: lastVisitDate,
    willingnessScoreToVisitAgain: willingnessScoreToVisitAgain,
    numberOfVisit: numberOfVisit,
    lastScore: lastScore,
    note: note,
  });

  newVisitedPlace
    .save()
    .then((data) => {
      res.status(200).json({
        message: "Created new visited place",
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

//Delete a visited place by id
router.delete("/visited/:placeID", (req, res, next) => {
  const id = req.params.placeID;
  console.log(id);
  VisitedPlace.deleteOne({
    _id: id,
  })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "Visited place is deleted",
        request: {
          type: "Delete by id",
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

// Delete all visited places
router.delete("/visited", function (req, res, next) {
  VisitedPlace.deleteMany({})
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "All visited places are deleted",
        request: {
          type: "Delete all",
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

//Patch visited place by id
router.patch("/visited/:placeID", function (req, res, next) {
  VisitedPlace.updateOne(req.params.id, req.body, function (err, place) {
    res.status(200).json({
      message: "Place is updated",
      request: {
        type: "Update visited place",
      },
    });
  }).catch((err) => {
    res.status(500).json({
      error: err,
    });
  });
});
////////////////////////////////////////////////////////////////////////////////

//toVisit Methods

//Get all toVisit places
router.get("/toVisit", function (req, res) {
  toVisitPlace
    .find()
    .then((places) => {
      res.status(200).json({
        message: "All ToVisit places are fetched.",
        places: places,
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//Get toVisit place by id
router.get("/toVisit/:placeID", function (req, res) {
  const id = req.params.placeID;
  ToVisitPlace.findById({
    _id: id,
  })
    .then((place) => {
      res.status(500).json({
        message: "ToVisit place is fetched by id.",
        place: place,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

// Create a new toVisit place
router.post("/toVisit", function (req, res) {
  const {
    name,
    isOutdoor,
    isVisited,
    adress,
    lastVisitDate,
    willingnessScore,
    expectationsScore,
  } = req.body;

  const newToVisitPlace = new ToVisitPlace({
    name: name,
    isOutdoor: isOutdoor,
    isVisited: isVisited,
    adress: adress,
    lastVisitDate: lastVisitDate,
    willingnessScore: willingnessScore,
    expectationsScore: expectationsScore,
  });

  newToVisitPlace
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// Delete a toVisit place by id
router.delete("/toVisit/:placeID", function (req, res, next) {
  const id = req.params.placeID;
  console.log(id);
  ToVisitPlace.deleteOne({
    _id: id,
  })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "To visit place is deleted",
        request: {
          type: "Delete by id",
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

//Delete all toVisit places
router.delete("/toVisit", function (req, res, next) {
  ToVisitPlace.deleteMany({})
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "All ToVisit places are deleted",
        request: {
          type: "Delete all",
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

//Patch toVisit place by id
router.patch("/toVisit/:placeID", function (req, res, next) {
  ToVisitPlace.updateOne(req.params.id, req.body, function (err, place) {
    res.status(200).json({
      message: "Place is updated",
      request: {
        type: "Update toVisit place",
      },
    });
  }).catch((err) => {
    res.status(500).json({
      error: err,
    });
  });
});
module.exports = router;
