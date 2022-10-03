const fs = require("fs");
const { createViewPath } = require("../helpers/create_view_path");
const Active = require("../helpers/active");

const getGallery = (req, res) => {
  let img = fs.readdirSync("./images");
  res.render(createViewPath("gallery"), {
    tittle: "Gallery",
    active: new Active({ gallery: "active" }),
    img,
  });
};

module.exports = { getGallery };
