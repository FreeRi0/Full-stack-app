require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT; // 5000;
const morgan = require("morgan");

//middleware//
app.use(cors());
app.use(morgan('combine'));
app.use(bodyParser.json());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("uploads"));


//routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//start server
app.listen(port, () =>
  console.log(`server running at http://localhost:${port}`)
);
