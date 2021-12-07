const express = require('express');
const router = express.Router(); 

const postController = require('../Controllers/PostController');

router.get('/', postController.baseRoute);

// create article
router.post('/create', postController.createPost);

// read all article
router.get('/getPosts', postController.getPosts);

// read one article
router.get('/getPost/:id', postController.getSinglePost);

// update article
router.put('/post/:id/update', postController.updatePost);

// delete article
router.delete('/delete/:id', postController.deletePost);

// read article with sorting
router.get('/getPostWithSorting', postController.postWithSorting);

// read article based on filter id
router.get('/getPostByFilter/:id', postController.getPostByFilterId);

// read article with pagination
router.get('/getPostWithPagination', postController.postWithPagination);

// read comment based on id article
router.get('/getComment/:id', postController.getCommentArticle);

// delete comment based on id article
router.delete('/deleteComment/:id', postController.deleteComment);

module.exports = router;