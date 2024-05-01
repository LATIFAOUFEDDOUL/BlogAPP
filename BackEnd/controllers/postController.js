const Post = require('../models/post');



// // creat a new post 
const createPost = async (req, res) => {
    try {
        const postdata = req.body;
        const newPost = new Post(postdata);
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
       
    
// get all posts
const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// get post by id
const getPostById = async (req, res) => {
    try {
        const id = req.params.id; 
        const post = await Post.findById(id); 
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// update post
const updatePost = async (req, res) => {
    try {
        const id = req.params.id; 
        const postData = req.body; 
        const updatedPost = await Post.findByIdAndUpdate(id, postData, { new: true }); 
        if (!updatedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(updatedPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// delete post
const deletePost = async (req, res) => {
    try {
        const id = (req.params.id); 
        const deletedPost = await Post.findByIdAndDelete(id); 
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json({ message: 'Post deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = { getAllPosts, createPost, updatePost, deletePost, getPostById };
