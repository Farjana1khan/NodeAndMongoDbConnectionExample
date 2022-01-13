const express = require("express");
const mongoose = require("mongoose");
const Router = require("./Routes/routes");
require("./db/conn")

const app = express();

app.use(express.json());
app.use(Router);








app.listen(5000, () => {
  console.log("Server is running at port 5000");
});