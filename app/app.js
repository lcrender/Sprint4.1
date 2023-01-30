require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(require('./middlewares/middleware'));
//app.use(require('./middlewares/auth'));
app.use(require('./routes/routes'));
 
// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
