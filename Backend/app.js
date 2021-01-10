require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors=require("cors")
const authRoutes = require("./routes/auth");
// const userRoutes=require("./routes/user")
const userRoutes = require("./routes/user");
const createRoutes = require("./routes/createArticle");
//DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({origin:true}));
//My Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", createRoutes);
//PORT
const port = process.env.PORT || 8000;

//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
