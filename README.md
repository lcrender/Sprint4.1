# Sprint4.1
## Como Probar el Proyecto:

`npm start` para comenzar el proyecto<br>

Importar Colección Postman<br>
La colección de Postman tiene 4 pruebas que funcionan con las siguientes peticiones HTTP:
```
GET http://localhost:4000/user
POST http://localhost:4000/upload
POST http://localhost:4000/time
GET http://localhost:4000/pokemon/ID
```

En el caso de la 2da peticion hay que adjuntar un archivo de imagen de tipo: jpg|jpeg|png|gif. Para esto debes ir dentro del Postman a la solapa Body - Form-data - "Key": image. "Tipo": File. y en el campo "Value" seleccionar una imagen.<br>

![Upload File Example](https://github.com/lcrender/Sprint4.1/blob/chaza/img/upload.png)

Para el 3er caso hay que hacer "Basic Auth"<br>
Para esto dentro del Postman ir a la solapa authorization, seleccionar "Type": Basic Auth. Luego poner un usuario y contraseña en el campo de al lado.<br>
Por ultimo hay que mandar por el body del mensaje un Json con los datos "Username" y "Password", estos deben coincidir con los puestos anteriormente.<br>
El formato debe ser como este ejemplo:<br>
```
{
    "username": "test",
    "password": "test"
}
```
![Auth Example](https://github.com/lcrender/Sprint4.1/blob/chaza/img/auth1.png)

![Auth Example](https://github.com/lcrender/Sprint4.1/blob/chaza/img/auth2.png)

Para el 4to caso reemplazar el "ID" de la URL por el numero de ID.<br>

![saludos](https://github.com/lcrender/Sprint4.1/blob/chaza/img/pikachu.webp)
