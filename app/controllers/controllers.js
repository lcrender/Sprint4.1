const ctrl = {};
ctrl.exportJson = (req, res) => {
	try {
		const getUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
		res.status(200).json({
			name: 'Alejandro',
			age: 37,
			url: getUrl
		});
	} catch (error) {
		res.status(400).json({ message: error });
	}
};
ctrl.uploadFile = (req, res) => {
	try {
		res.status(201).json({ menssage: 'Archivo enviado' });
	} catch (error) {
		res.status(400).json({ message: error });
	}
};
ctrl.userTime = (req, res) => {
	try {
		const { username } = req.body;
		const date = new Date();
		res.header('Cache-control', 'no-cache');
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Authorization');
		res.status(200).json({ username, date });
	} catch (error) {
		res.status(400).json({ message: error });
	}
};
ctrl.pokemon = async (req, res) => {
	try {
		const { id } = req.params;
		const pokeApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
		const pokemon = await pokeApi.json();
		res.status(200).json({
			name: pokemon.name,
			height: pokemon.height,
			weight: pokemon.weight
		});
	} catch (error) {
		res.status(400).json({ message: error });
	}
};
module.exports = ctrl;