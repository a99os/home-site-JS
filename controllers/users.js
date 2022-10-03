const axios = require("axios");
const { createViewPath } = require("../helpers/create_view_path");

const Active = require("../helpers/active");

const getUsers = async (req, res) => {
  try {
    const users = await (
      await axios.get("http://jsonplaceholder.typicode.com/users")
    ).data;
    res.render(createViewPath("users"), {
      tittle: "Users",
      users,
      active: new Active({ users: "active" }),
    });
  } catch (error) {
    console.log(error);
  }
};

const getUserId = async (req, res) => {
  try {
    const user = await (
      await axios({
        method: "GET",
        url: `http://jsonplaceholder.typicode.com/users/${req.params.id}`,
      })
    ).data;
    res.render(createViewPath("user"), {
      tittle: user.name,
      user,
      active: new Active({ users: "active" }),
    });
  } catch (error) {
    console.log(error);
  }
};

const addUser = (req, res) => {
  res.render(createViewPath("add-user"), {
    tittle: "add-user",
    active: new Active({}),
  });
};

const addUserPost = async (req, res) => {
  const { name, username, email, phone } = req.body;
  try {
    const userData = await axios.post(
      "http://jsonplaceholder.typicode.com/users",
      {
        name,
        username,
        email,
        phone,
      }
    );
    const user = userData.data;
    res.render(createViewPath("user"), {
      tittle: "added-user",
      user,
      active: new Active({}),
    });
  } catch (error) {
    console.log(error);
  }
};

const editUser = async (req, res) => {
  const { id } = req.params;
  const userData = await axios.get(
    "http://jsonplaceholder.typicode.com/users/" + id
  );
  const user = userData.data;
  res.render(createViewPath("edit-user"), {
    tittle: "edit-user",
    active: new Active({}),
    user,
  });
};

const editUserPut = async (req, res) => {
  const { id } = req.params;
  const { name, username, email, phone } = req.body;

  try {
    const userData = await axios.put(
      "http://jsonplaceholder.typicode.com/users/" + id,
      {
        name,
        username,
        email,
        phone,
      }
    );
    const user = userData.data;
    // user.id = id;
    console.log(user.id);
    res.render(createViewPath("user"), {
      tittle: "edited-user id: " + id,
      user,
      active: new Active({}),
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const userData = await axios.delete(
      `http://jsonplaceholder.typicode.com/users/${id}`
    );
    const user = userData.data;
    console.log(user);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getUsers,
  getUserId,
  addUser,
  addUserPost,
  editUser,
  editUserPut,
  deleteUser,
};
