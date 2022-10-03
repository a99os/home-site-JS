const { createViewPath } = require("../helpers/create_view_path");
const Active = require("../helpers/active");
const axios = require("axios");

const getPosts = async (req, res) => {
  try {
    const posts = await (
      await axios.get("http://jsonplaceholder.typicode.com/posts")
    ).data;
    // console.log(posts);
    res.render(createViewPath("posts"), {
      tittle: "Posts",
      posts,
      active: new Active({ posts: "active" }),
    });
  } catch (error) {
    console.log(error);
  }
};
const getPostId = async (req, res) => {
  try {
    const post = await (
      await axios({
        method: "GET",
        url: `http://jsonplaceholder.typicode.com/posts/${req.params.id}`,
      })
    ).data;
    res.render(createViewPath("post"), {
      tittle: "post id:" + post.id,
      post,
      active: new Active({ posts: "active" }),
    });
  } catch (error) {
    console.log(error);
  }
};
const addPost = (req, res) => {
  res.render(createViewPath("add-post"), {
    tittle: "add-user",
    active: new Active({}),
  });
};

const addPostPost = async (req, res) => {
  const { title, body } = req.body;
  try {
    const postData = await axios.post(
      "http://jsonplaceholder.typicode.com/posts",
      {
        title,
        body,
      }
    );
    const post = postData.data;
    res.render(createViewPath("post"), {
      tittle: "added-post",
      post,
      active: new Active({}),
    });
  } catch (error) {
    console.log(error);
  }
};

const editPost = async (req, res) => {
  const { id } = req.params;
  const postData = await axios.get(
    "http://jsonplaceholder.typicode.com/posts/" + id
  );
  const post = postData.data;
  res.render(createViewPath("edit-post"), {
    tittle: "edit-post",
    active: new Active({}),
    post,
  });
};

const editPostPut = async (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;

  try {
    const postData = await axios.put(
      "http://jsonplaceholder.typicode.com/posts/" + id,
      {
        title,
        body,
      }
    );
    const post = postData.data;
    res.render(createViewPath("post"), {
      tittle: "edited-post id: " + id,
      post,
      active: new Active({}),
    });
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await (
      await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`)
    ).data;
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getPosts,
  getPostId,
  addPost,
  addPostPost,
  editPost,
  editPostPut,
  deletePost,
};
