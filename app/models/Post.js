
var Post = {
    attributes: {
        title: { required: true, type: 'string' },
        message: { required: true, type: 'text' }
    },

    migrate: 'drop',

    autoPK: false,

    sayHi: function () {
        return 'Hi!'
    }

};

module.exports = Post;