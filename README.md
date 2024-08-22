Technical Challenge - Relevamiento de Servidores

En el repositorio podemos encontrar dos carpetas:

● app -> aplicacion desarrollada con React

  ● En el directorio del proyecto, puede ejecutar:

    npm install -> para instalar dependencias.

    npm start -> para correr la aplicacion.
    
    Abra http://localhost:3000 para verlo en su navegador.

    La aplicacion ya esta configurada para enviar y recibir peticiones a la api que se encuentra corriendo en una instanca de AWS.

● server -> api que recibe las peticiones del front y envia solicitudes de informacion a los servidores donde estan corriendo los agentes. Posteriormente devuelve estas consultas.

  ● En el directorio del proyecto, puede ejecutar:

    npm install -> para instalar dependencias.

    node index.js -> para correr el servidor y hacer pruebas locales.
