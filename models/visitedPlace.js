const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const VisitedPlace = mongoose.model(
    "VisitedPlace",
    Schema({
        _id: {
            type: mongoose.Schema.Types.ObjectId
        },
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


        willingnessScoreToVisitAgain: {
            type: Number,
            required: false
        },
        numberOfVisit: {
            type: Number,
            required: true,
            default: 1
        },
        lastVisitDate: {
            type: Date,
            required: [true, "Please indicate the date of last visit!"],
        },
        lastScore: {
            type: Number,
            required: false
        },
    })
);



module.exports = mongoose.model('VisitedPlace');