console.clear();
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const morgan = require("morgan");
const fs = require("fs");
const axios = require("axios");
const { resolve } = require("path");
const methodOverride = require("method-override");
const { createViewPath } = require("./helpers/create_view_path");
const Active = require("./helpers/active");

dotenv.config();
const PORT = process.env.PORT;
const userRoute = require("./routes/users");
const jobRoute = require("./routes/jobs");
const contRoute = require("./routes/contacts");
const galleryRoute = require("./routes/gallery");
const postsRoute = require("./routes/posts");

app.listen(PORT, () => {
  console.log(`Server ishga tushdi: http://localhost:${PORT}`);
});

const myLogger = function (req, res, next) {
  console.log("LOGGED");
  next();
};

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.use(myLogger);
app.use(morgan(":method :url :status :res[content-length]-:response-time ms"));

app.use(express.static("styles"));
app.use(express.static("images"));
app.set("view engine", "ejs");

//HOME
app.get("/", (req, res) => {
  res.render(createViewPath("index"), {
    tittle: "Main",
    active: new Active({ main: "active" }),
  });
});

//USERS
app.use(userRoute);

//JOBS
app.use(jobRoute);

//CONTACTS
app.use(contRoute);

//GALLERY
app.use(galleryRoute);
//PoOSTS
app.use(postsRoute);

//ERROR
app.use((req, res) => {
  res.status(404).render(createViewPath("error"), {
    tittle: "Error",
    active: new Active({}),
  });
});
