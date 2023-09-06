const express = require("express");
const routerApi = require("./routes/index");
const cors = require("cors");
const { getHome } = require("./services/index");


const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./libs/sequelize-model");



const allowedOrigins = ["http://localhost:8080"];
const options = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Origin not allowed"));
    }
  },
};

app.use(cors(options));

app.get("/", getHome);

routerApi(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
