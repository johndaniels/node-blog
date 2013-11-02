(function () {
    "use strict";
    
    var Post = Backbone.Model.extend({
        urlRoot: '/api/v0/posts',
        title: function () {
            return this.get('title');
        },
        body: function () {
            return this.get('body');
        }
    });

    var postTemplate = Mustache.compile(
        '<h1>{{title}}</h1><div id="post-body">{{body}}</div>'
    );

    var Router = Backbone.Router.extend({
        routes: {
            'about': 'about',
            'posts/:id': 'post'
        },

        about: function() {
            $('#main').html('<h1>about page</h1>');
        },

        post: function (id) {
            var post = new Post({
                id: id
            });
            post.fetch().done(function () {
                $('#main').html(postTemplate(post));
            });
        }
    });

    var router = new Router();

    Backbone.history.start();
})();
