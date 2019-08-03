const express = require('express');
const app = express();

//Fetch posts array
const posts = require('./api');

app.get('/api/ping', (req, res) => {
    res.status(200).send({ "success": true });
})

app.get('/api/posts', (req, res) => {

    if (!req.query.hasOwnProperty('tags'))
        res.status(400).send({ "error": "Tags parameter is required" })

    const tagsArray = req.query.tags.split(",");

    const filterPosts = post => {
        for (i = 0; i < tagsArray.length; i++) {
            if (post.tags.includes(tagsArray[i])) return true;
        }
    };
    const filteredPosts = posts.filter(filterPosts);
    res.status(200).send(filteredPosts);
})

app.listen(3000, () => console.log('listening on port 3000...'));
