const express = require("express");
const router = express.Router();

router.get("/visited", function (req, res) {
    res.send("Visited sayfasına get isteği atıldı");
});

router.get("/toVisit", function (req, res) {
    res.send("ToVisit sayfasına get atıldı");
});

router.post("/visited", function (req, res) {
    res.send("Visited sayfasına post isteği atıldı");
});

router.post("/toVisit", function (req, res) {
    res.send("ToVisit sayfasına post atıldı");
});

module.exports = router;