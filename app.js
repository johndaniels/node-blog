(function () {
    var express = require('express');
    var app = express();
    app.use("/static", express.static('static'));

    app.get('/api/v0/posts/1', function(req, res) {
        res.json({
            title: 'My first post',
            body: 'Hello, world'
        });
    });

    app.listen('8080');
})();
