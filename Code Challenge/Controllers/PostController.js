const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
const Posts = mongoose.model("posts");

exports.baseRoute = async (req, res) => {
  res.send("Server Running");
};

exports.getPosts = async (req, res) => {
  const posts = await Posts.find();
  res.json(posts);
};

exports.postWithSorting = async (req, res) => {
  const posts = await Posts.find().sort({ _id: 1 });
  res.json(posts);
};

exports.postWithPagination = async (req, res) => {
  const page = 20;
  const limit = 5;
  const skipIndex = (page - 1) * limit;
  const result = {};
  try {
    results.results = await Posts.find()
      .sort({ _id: 1 })
      .limit(limit)
      .skip(skipIndex)
      .exec();
    res.paginatedResults = results;
    next();
  } catch (e) {
    res.status(500).json({ message: "Error Occured" });
  }
};

exports.createPost = async (req, res) => {
  await new Posts(req.body).save((err, data) => {
    if (err) {
      res.status(500).json({
        message:
          "Something went wrong, please try again later.",
      });
    } else {
      res.status(200).json({
        message: "Post Created",
        data,
      });
    }
  });
};

exports.getSinglePost = async (req, res) => {
  let postID = req.params.id;
  await Posts.findById({ _id: postID }, (err, data) => {
    if (err) {
      res.status(500).json({
        message:
          "Something went wrong, please try again later.",
      });
    } else {
      console.log(data);      
      res.status(200).json({
        message: "Post found",
        data
      });
    }
  });
};

exports.getCommentArticle = async (req, res) => {
  let postID = req.params.id;
  await Posts.findById({ _id: postID }, (err, data) => {
    if (err) {
      res.status(500).json({
        message:
          "Something went wrong, please try again later.",
      });
    } else {
      console.log(data);      
      res.status(200).json({
        message: "Comment found",
        data
      });
    }
  });
};

exports.getPostByFilterId = async (req, res) => {
  let postID = req.params.id;
  await Posts.findById({ _id: postID }, (err, data) => {
    if (err) {
      res.status(500).json({
        message:
          "Something went wrong, please try again later.",
      });
    } else {
      console.log(data);      
      res.status(200).json({
        message: "Post found",
        data
      });
    }
  });
};


exports.updatePost = async (req, res) => {
  let postID = req.params.id;

  await Posts.findByIdAndUpdate({_id: postID}, {$set : req.body}, (err, data) => {
    if (err) {
      res.status(500).json({
        message:
          "Something went wrong, please try again later.",
      });
    } else {
      res.status(200).json({
        message: "Post Updated",
        data,
      });
    }
  });
}

exports.deletePost = async (req, res) => {
  let postID = req.params.id;
  await Posts.deleteOne({ _id: postID }, (err, data) => {
    if (err) {
      res.status(500).json({
        message:
          "Something went wrong, please try again later.",
      });
    } else {
      res.status(200).json({
        message: "Post Deleted"
      });
    }
  });
};

exports.deleteComment = async (req, res) => {
  let postID = req.params.id;
  await Posts.deleteOne({ _id: postID }, (err, data) => {
    if (err) {
      res.status(500).json({
        message:
          "Something went wrong, please try again later.",
      });
    } else {
      res.status(200).json({
        message: "Comment Deleted"
      });
    }
  });
};
