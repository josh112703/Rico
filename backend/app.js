
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const Post = require('./model/post');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb+srv://joshuarico927:09099912912jr@cluster0.8lnk8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=> {
    console.log('Connected to the Database');
})
.catch(()=> {
    console.log('Connection Failed');
})
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");

    res.setHeader('Access-Control-Allow-Methods',
        "GET, POST, PATCH, DELETE, OPTIONS")
    next();}
    )


    app.post('/api/posts', (req, res, next) => {
        const post = new Post({
            title: req.body.title,
            content: req.body.content
        });
        post.save();
        res.status(201).json({
            message: 'Post added successfully'
        });
        });

app.get('/api/posts',(req, res, next) => {
    const posts = 
        [{
            id: "adad",
            title: "first title servepoiytuyrhtgdhfjgkr",
            content: "first content"
        },
        {
            id: "adad",
            title: "second title server",
            content: "second content"
        }
    ];
    

    res.status(200).json({
        message: "Posts fetched successfully",
        posts: posts
    });
})

module.exports = app;