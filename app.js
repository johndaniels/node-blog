(function () {
    "use strict";
    var express = require('express');
    var sqlite3 = require('sqlite3');
    var db = new sqlite3.Database('blog.db');
    var app = express();
    app.use("/static", express.static('static'));

    app.get('/api/v0/posts', function(req, res) {
        var id = parseInt(req.params.id, 10);
        db.all('SELECT id, title, body FROM Posts', function (err, posts) {
            res.json(posts);
        });
    });

    app.get('/api/v0/posts/:id', function(req, res) {
        var id = parseInt(req.params.id, 10);
        db.get('SELECT title, body FROM Posts WHERE id = ?', id, function (err, post) {
            res.json(post);
        });
    });


    app.get('/', function (req, res) {
        res.sendfile("main.html");
    });

    app.listen('8080');
})();
