const Active = require("../helpers/active");
const { createViewPath } = require("../helpers/create_view_path");

const getCont = (req, res) => {
  const contacts = [
    { name: "You tube", link: "https://www.youtube.com" },
    { name: "Instagram", link: "https://www.instagram.com" },
    { name: "Facebook", link: "https://www.facebook.com" },
    { name: "Telegram", link: "https://telegram.org/" },
  ];
  res.render(createViewPath("contacts"), {
    tittle: "Contacts",
    contacts,
    active: new Active({ contacts: "active" }),
  });
};

module.exports = { getCont };
