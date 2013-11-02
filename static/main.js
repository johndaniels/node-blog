(function () {
    var Router = Backbone.Router.extend({
        routes: {
            'about': 'about',
            'posts/:id': 'post'
        },

        about: function() {
            $('#main').html('<h1>about page</h1>');
        },

        post: function (id) {
            $('#main').html('<h1>post ' + id + '</h1>');
        }
    });

    var router = new Router();

    Backbone.history.start();
})();
