var items = [{name: 'Couch', description: 'Ikea this is comfortable! Although oddly small and modular!'},
			 {name: 'Laptop', description: 'Beep boop, goes the laptop'},
			 {name: 'foobar', description: 'test for the inventory app'}];

exports.list = function (req, res) {
	res.render('index', {items: items});
};