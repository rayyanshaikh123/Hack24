
const express = require('express');
const connectTOMongo = require('./db');
const cors = require('cors');

const express = require("express");
const connectTOMongo = require("./db");

const app = express();
const router = express.Router();
const path = require("path");
const cors = require("cors");
connectTOMongo();

app.use(express.json())
const corsOptions = {
    origin: 'http://localhost:3000',
    method:["GET","POST"]
  };
  
  app.use(cors(corsOptions));
//routes

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    method: ["GET", "POST"],
  })
);


// Define route to serve the HTML file
router.get("/", (req, res) => {
  // Adjust the path to index.html
  const indexPath = path.resolve(__dirname, "..", "./Backend/views", "index.html");
  res.sendFile(indexPath);
});

// Mount the router to handle requests to the root path ("/")
app.use("/", router);

// Define other routes
app.use("/user", require("./routers/auth"));
app.use("/api/product", require("./routers/product"));
app.use("/api/cart", require("./routers/cart"));
app.use("/api/cartr", require("./routers/cartRoutes"));
app.use("/api/payment", require("../Frontend/src/components/razorpay"));

app.listen(5000, () => {
  console.log("Listening to port 5000");
});
