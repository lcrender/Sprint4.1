const ctrl = {};
// Funciones
ctrl.exportJson = (req, res) =>
res.json(
    {
        name: 'Alejandro',
        age: 37,
        url: 'http://localhost:4000/user'
    }
);
ctrl.uploadFile = (req, res) => {  
    res.send("Archivo enviado")
};

module.exports = ctrl;