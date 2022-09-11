const express = require("express");
const { sweuyghurDB } = require("./database");
// require('./database/index')
require("dotenv").config();
const routes = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  })
)

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));


app.use("/api", routes.auth);
app.use("/api", routes.users);
app.use("/api", routes.products);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  sweuyghurDB();
  console.log(`SERVER STARTED ON PORT: ${PORT}`);
});
