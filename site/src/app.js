//darle color a los console log de consola
const chalk = require("chalk");

//importamos express y lo asignamos como una funcion para poder hacer uso de todos sus metodos
const express = require("express");
const app = express();

//path estatico PUBLIC
const path = require("path");
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

//uso de cors para que pueda llamarse a las apis de otras direcciones
const cors = require("cors");
app.use(cors()); //esta configurado para que cualquier direccion pueda hacer consultas

//Para poder leer formularios
app.use(express.urlencoded({ extended: false })); //poder leer la informacion de los formularios dentro de un objeto con la info del formulario

//para tener metodos put y delete desde los formularios del front
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

//configuracion de plantillas ejs
const viewsPath = path.resolve(__dirname, "./views");
app.set("view engine", "ejs");
app.set("views", viewsPath);

//session
const session = require("express-session");

//cookies
const cookieParser = require("cookie-parser");
app.use(cookieParser());

//seteamos el puerto y levantamos el server
const port = 3000;

app.listen(process.env.PORT || port, () => {
  console.log("");
  console.log(chalk.yellow("Entorno de desarrollo = " + process.env.NODE_ENV));
  console.log("");
  console.log(
    chalk.blue("------------------------------------------------------")
  );
  console.log(chalk.blue("Site ONLINE... escuchando por el puerto " + port));
  console.log(chalk.blue("Link directo... http://localhost:" + port));
  console.log(
    chalk.blue("------------------------------------------------------")
  );
  console.log("");
});

/*-------------------DIRECCION PRINCIPAL PAGINAS-----------*/

//ruta main
const mainRouter = require(path.resolve(__dirname, "./routes/mainRouter"));
app.use("/", mainRouter);

//ruta users
const usersRouter = require(path.resolve(__dirname, "./routes/usersRouter"));
app.use("/users", usersRouter);

//ruta products
const productsRouter = require(path.resolve(__dirname, "./routes/productsRouter"));
app.use("/products", productsRouter);

const error404 = require('./middlewares/notFoundMiddleware');
app.use(error404);