
var Route = App.router;

Route.get('/', function(req, res){
    res.view('index', { title: 'Quorra' });
});

Route.get('users', function(req, res) {
    res.view('users');
});

//Route.controller('users', 'HomeController');