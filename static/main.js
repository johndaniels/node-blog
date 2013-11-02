(function () {
    "use strict";
    
    var Post = Backbone.Model.extend({
        urlRoot: '/api/v0/posts',
        fragment: function () {
            return '/posts/' + this.id;
        },
        title: function () {
            return this.get('title');
        },
        body: function () {
            return this.get('body');
        }
    });

    var PostCollection = Backbone.Collection.extend({
        url: '/api/v0/posts',
        model: Post
    });

    var postTemplate = Mustache.compile(
        '<h1>{{title}}</h1><div id="post-body">{{body}}</div>'
    );

    var postsTemplate = Mustache.compile(
        '{{#posts}}<div><a href="#{{fragment}}">{{title}}</a></div>{{/posts}}'
    );

    var Router = Backbone.Router.extend({
        routes: {
            'about': 'about',
            'posts/:id': 'post',
            'posts': 'posts'
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
        },
        posts: function () {
            var posts = new PostCollection();
            posts.fetch().done(function () {
                $('#main').html(postsTemplate({
                    posts: posts.models
                }));
            });
        }
    });

    var router = new Router();

    Backbone.history.start();
})();
