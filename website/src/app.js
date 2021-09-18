// Módulos
const path = require("path");
const express = require("express");
const session = require("express-session");
const app = express();
const method = require('method-override'); // para put y delete. Requiere NPM I method-override
const cookies = require('cookie-parser');

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

// Server
app.set("port", process.env.PORT ||3001)
app.listen(app.get("port"), () => console.log("Server Start in http://localhost:3001"))

// Configuración
app.use(express.static(path.resolve(__dirname,"../public")));
app.use(session({
	secret: "mensaje secreto aleatorio",
	resave: false,
	saveUninitialized: false,
}));


app.use(cookies());

app.use(userLoggedMiddleware);


// Set view Engine. express reconoce ejs)
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname,"./views"));

/* Data Configuration */

app.use(express.urlencoded({extended:false})) // Not fund req.body
app.use(method("_method")) // ?_method=PUT

// Rutas
const main = require ("./routes/mainRouter");
app.use(main)
const products = require ("./routes/productsRouter");
app.use("/product",products)
const users = require ("./routes/usersRouter");
app.use("/user",users)

//ruta de las api 
const apiUsersRouter = require('./routes/api/usersAPIRouter')
app.use('/api/users',apiUsersRouter);
const apiProductsRouter = require('./routes/api/productsAPIRouter')
app.use('/api/products',apiProductsRouter);



