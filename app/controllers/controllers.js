const ctrl = {};

ctrl.exportJson = (req, res) => { 
const getUrl = req.protocol + '://' + req.get('host') + req.originalUrl
res.status(200).json(
    {
        name: 'Alejandro',
        age: 37,
        url: getUrl
    });
}
ctrl.uploadFile = (req, res) => {  
    res.send("Archivo enviado")
};
ctrl.userTime = (req, res) => {
    const {username} = req.body;
    const date = new Date();
    res.header("Cache-control", "no-cache");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Authorization");
    res.json({username, date});
};
ctrl.pokemon = async (req, res) => {
    const {id} = req.params;
    const pokeApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await pokeApi.json();
    res.status(200).json({
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight
    });
}
module.exports = ctrl;