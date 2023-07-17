const express = require("express");
const serverless = require("serverless-http");

const bodyParser = require("body-parser");

// Create an instance of the Express app
const app = express();

// Create a router to handle routes
const router = express.Router();

// Define a route that responds with a JSON object when a GET request is made to the root path
router.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});

router.post("/form", function (req, res) {
  // var cuurent_date = new Date();
  // cuurent_date = new Date().toISOString().slice(0, 19).replace("T", " ");

  // require("dotenv").config();
  // const mysql = require("mysql2");
  // const connection = mysql.createConnection(process.env.DATABASE_URL);
  // console.log(process.env.DATABASE_URL);
  // console.log("Connected to PlanetScale!");
  // connection.connect(function (err) {
  //   if (err) throw err;
  //   console.log("Connected!");
  //   var sql = `insert into registration_ta (name, email, mobile, datetime) values ('${req.body.name}', '${req.body.email}', '${req.body.mobile}', '${cuurent_date}')`;
  //   connection.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log("1 record inserted");
  //   });
  // });

  // console.log(req.body);

  res.send(req.body);
});

// Use the router to handle requests to the `/.netlify/functions/api` path
app.use(`/.netlify/functions/api`, router);
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Export the app and the serverless function
module.exports = app;
module.exports.handler = serverless(app);
