(function () {
    "use strict";
    var Router = Backbone.Router.extend({
        routes: {
            'about': 'about',
            'posts/:id': 'post'
        },

        about: function() {
            $('#main').html('<h1>about page</h1>');
        },

        post: function (id) {
            $('#main').html(Mustache.render('<h1>post {{id}} </h1>', {
                id: id
            }));
        }
    });

    var router = new Router();

    Backbone.history.start();
})();
