var BaseController = require('./BaseController.js');

var PostController  = BaseController.extend(function(){

    /**
     * Look if user is authenticated for store, update, destroy actions.
     */
    this.beforeFilter('auth', {'only': ['update', 'destroy']});

    /**
     * Get the index of post.
     * 
     * GET /post/
     */
    this.index = function (req, res) {
        Post.find(function(err, posts) {
            res.json(posts);
        })
    }

    /**
     * Get a single post.
     * 
     * GET /post/{id}
     */
    this.show = function (req, res, id) {
        // get
        Post.findOne(id, function(err, post) {
            res.json(post)
        })
    }

    /**
     * Store a new post
     * 
     * POST /post/
     */
    this.store = function (req, res) {
        Post.create(req.input.all()).exec(function(err,post) {
            if(!err) {
                res.json(post)
            }
        })
    }

    /**
     * Update a post providing it's ID
     * 
     * PATCH /post/{id}
     */
    this.update = function (req, res, id) {
        // patch
        Post.update()
    }

    /**
     * Destroy a post
     * 
     * DELETE /post/{id}
     */
    this.destroy = function (req, res, id) {
        // delete
    }
});

module.exports = PostController;