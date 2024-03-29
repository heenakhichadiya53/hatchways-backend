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

    //remove duplicate posts
    const uniquePosts = [...new Set(filteredPosts)];

    //sort posts by ID(default)
    uniquePosts.sort((a, b) => {
        if (a.id > b.id) return 1;
        if (a.id < b.id) return -1;
        return 0;
    })

    if (req.query.hasOwnProperty('sortBy')) {
        if (req.query.sortBy == 'reads') {
            uniquePosts.sort((a, b) => {
                if (a.reads > b.reads) return 1;
                if (a.reads < b.reads) return -1;
                return 0;
            })
            res.status(200).send(uniquePosts);
            res.end();
        }

        else if (req.query.sortBy == 'likes') {
            uniquePosts.sort((a, b) => {
                if (a.likes > b.likes) return 1;
                if (a.likes < b.likes) return -1;
                return 0;
            })
            res.status(200).send(uniquePosts);
            res.end();
        }

        else if (req.query.sortBy == 'popularity') {
            uniquePosts.sort((a, b) => {
                if (a.popularity > b.popularity) return 1;
                if (a.popularity < b.popularity) return -1;
                return 0;
            })
            res.status(200).send(uniquePosts);
            res.end();
        }

        else {
            res.status(400).send({ "error": "sortBy parameter is invalid" })
        }
    }

    res.status(200).send(uniquePosts);
})

app.listen(3000, () => console.log('listening on port 3000...'));
