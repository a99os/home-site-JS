const express = require("express");
const {
  getPosts,
  getPostId,
  addPost,
  addPostPost,
  editPost,
  editPostPut,
  deletePost,
} = require("../controllers/posts");
const router = express.Router();

router.get("/posts", getPosts);

router.get("/post/:id", getPostId);

router.get("/add-post", addPost);

router.post("/add-post", addPostPost);

router.get("/edit-post/:id", editPost);

router.put("/edit-post/:id", editPostPut);

router.delete("/post/:id", deletePost);

module.exports = router;
