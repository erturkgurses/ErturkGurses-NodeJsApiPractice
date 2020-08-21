const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const placesRoutes = require("./routes/places");

const db = require("./db/db")();
app.use("/places", placesRoutes);



app.listen(port, () => {
  console.log(`localhost:${port} -> API aktif. `);
});
