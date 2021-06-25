// Módulos
const path = require("path");
const express = require("express");
const app = express();
const method = require('method-override'); // para put y delete. Requiere NPM I method-override


// Configuración
// app.use(express.static('public'));
app.use(express.static(path.resolve(__dirname,"../public")));

// Set view Engine. express reconoce ejs)
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname,"./views"));

// Server
app.set("port", process.env.PORT ||3000)
app.listen(app.get("port"), () => console.log("Server Start in http://localhost:3000"))

// Rutas
const main = require ("./routes/mainRouter");
app.use(main)
const products = require ("./routes/productsRouter");
app.use(products)
const users = require ("./routes/usersRouter");
app.use(users)

