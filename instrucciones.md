# *Creacion de 0 de un proyecto node, expres, sequelize SQL, ejs, y API*   
   
1. Tener node instalado de forma global.  
2. npm init. (configurar el proyecto con los datos correspondientes)   
3. instalar los siguientes modulos.   
npm install 
    bcryptjs (para encriptar strings)  
    chalk (dar colores al console.log del lado del server)   
    cookie-parser (para manejar las cookies)   
    cors (para que se puedan hacer consultas a apis desde cualquier direccion web)
    ejs  (plantilla para el front end, maneja html y js junto)   
    express   (modulos necesarios para manejar todo el servidor, ruteo, controllers, path, etc)   
    express-session   (para manejar sesiones de usuarios)    
    express-validator   (para hacer validaciones en backend)    
    method-override   (para manejar metodos put y delete que vienen desde el front)   
    multer   (para subir al servidor imagenes)    
    mysql2   (para el manejo de DB mysql)    
    node-fetch   (para hacer pedidos asincronicos en backend)    
    sequelize   (ORM para manejar DB y aplicacion)   
 4. crear estructura de carpetas.  
    /database (esta carpeta se va a crear cuando se configure el sequelize)
    /node_modules (ya existia de antes cuando se instalan todos los modulos)
    /site
        /public
            /css
            /js
            /img
        /src
            /apis
                /v1
                    /routers
                    /controllers
            /controllers (los controladores... las funcionalidades que deben realizar segun la ruta de donde venga el pedido)
            /middlewares (los middleware para verificar los permisos de redireccionamiento)
            /routes (las rutas)
            /utils (js que dan una funcionalidad extra)
            /validations (las validaciones en backend)
            /views (vistas)
                /others (pantallas que son extras. tipo error404 o pagina en mantenimiento)
                /partials (partes de las paginas que se repiten y pueden ser incrustadas dentro de otras paginas)
                /products (paginas que muestra todo lo que tiene que ver con productos)
                /users (paginas que muestra todo lo que tiene que ver con usuarios)
            app.js (entry point)
