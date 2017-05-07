
var Route = App.router;

Route.get('/', function(req, res){
    res.view('index', { title: 'Quorra' });
});

Route.get('users', function(req, res) {
    res.view('users');
});

Route.post('login/admin', 'AdminController@login');

Route.group({'prefix': 'post'}, function () {
    Route.get('/{id}', 'PostController@get');
    Route.post('/', 'PostController@post');
    Route.patch('/', 'PostController@patch');
    Route.delete('/{id}', 'PostController@delete');
});

Route.resource('post', 'PostController', {'except': ['create', 'edit']})

//Route.controller('users', 'HomeController');