const express = require("express");
const {
  getUsers,
  getUserId,
  addUser,
  addUserPost,
  editUser,
  editUserPut,
  deleteUser,
} = require("../controllers/users");
const router = express.Router();
const { createViewPath } = require("../helpers/create_view_path");

router.get("/users", getUsers);

//GET USER
router.get("/user/:id", getUserId);

//ADD USER
router.get("/add-user", addUser);

router.post("/add-user", addUserPost);

//EDIT USER
router.get("/user/edit-user/:id", editUser);

router.put("/user/edit-user/:id", editUserPut);
//DELETE
router.delete("/user/:id", deleteUser);

module.exports = router;
