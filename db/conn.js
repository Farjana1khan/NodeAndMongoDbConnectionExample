
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/usersdb", {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection success");
  })
  .catch(() => {
    console.log("no connection");
  });

  