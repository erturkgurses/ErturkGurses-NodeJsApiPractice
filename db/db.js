module.exports = () => {
  const mongoose = require("mongoose");

  const uri =
    "mongodb+srv://erturk:cz5Y1g0OsvCg4MfZ@meetingcluster.gxpch.mongodb.net/MeetingCluster?retryWrites=true&w=majority";

  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB Connected…");
    })
    .catch((err) => console.log(err));

  mongoose.Promise = global.Promise;
};
