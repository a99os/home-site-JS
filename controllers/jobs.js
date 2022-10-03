const fs = require("fs");
const { createViewPath } = require("../helpers/create_view_path");
const Active = require("../helpers/active");
let data = JSON.parse(fs.readFileSync("./helpers/jobs/jobs.json", "utf-8"));

const getContact = (req, res) => {
  res.render(createViewPath("jobs"), {
    tittle: "Jobs",
    active: new Active({ jobs: "active" }),
    data,
  });
};
module.exports = {getContact}
