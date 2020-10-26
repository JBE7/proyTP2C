<b>Desafío 2:</b>

Sobre el proyecto, utilizar json web token e implementar encriptación en la bdd para la contraseña utilizando bcrypt.

<b>Resumen de lo desarrollado para la resolución del desafío:</b>

1) Se creo un /data/User.js, con el fin de tener 2 funciones nuevas: Una para obtener un usuario en base a su id, otra para crear un nuevo usuario.

2) Se creo /routes/users.js, con el fin de poder tener 1 endpoint para cada función nueva. Acá se implementó bcrypt, para encriptar la contraseña al momento de enviarla a la bdd, y para       comparar la contraseña de la bdd, con la contraseña enviada por el usuario en la request. Se creó una nueva carpeta /configs/config.js, que contiene una clave dentro de "llave", la cual es utilizada para el proceso de encrypt y posterior comparación.

3) Se creó un nuevo file middleware.js, el cual se encarga de exportar una función, la cual por medio de jsonwebtoken y la "llave" guardada en /configs/config.js, verifican que el token enviado en el body de la request solicitada corresponda al token generado anteriormente.

4) Dentro del endpoint /auth de /data/users.js, se realiza la generación del token, el cual será requerido en los métodos que soliciten la verificación (por ejemplo, Delete de inventors.js).

Las pruebas se realizaron mediante postman. Debajo se adjunta un link a drive con los request creados y su implementación (Esta se puede importar a postman directamente):

https://drive.google.com/file/d/1qsyBPE5W3A8Y8Xcz78wticYQfLkBDLvU/view?usp=sharing
