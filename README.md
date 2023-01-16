npm i express express-fileupload multer uuid node-fetch

POSTMAN

GET http://localhost:4000/user

POST http://localhost:4000/upload
(Body, from-data)
KEY: ‘image’
File

POST http://localhost:4000/time
utilizar basic authorization con un username y password, estos deben ser los mismos que las KEYS/VALUES que se envíen por postman
KEY: username
KEY: password

GET http://localhost:4000/pokemon/5