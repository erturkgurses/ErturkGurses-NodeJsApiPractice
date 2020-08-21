const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ToVisitPlace = mongoose.model(
    'ToVisitPlace',
    Schema({
        name: {
            type: String,
            required: [true, "Please add a name!"],
          },
       
          adress: {
            type: String,
            required: [true, "Please add an adress!"],
          },
          isOutdoor: {
            type: Boolean,
            required: [
              true,
              "Please indicate whether the place is inside or outside!",
            ],
          },
          note: {
            type: String,
            required: false
          },
          isVisited: {
            type: Boolean,
            required: [
              true,
              "Please indicate whether the place is visited or not visited!",
            ],
          },
       
        willingnessScore: {
            type: Number,
            required: false
        },
        expectationsScore: {
            type: Number,
            required: false
        },
    })
);


module.exports = mongoose.model('ToVisitPlace');