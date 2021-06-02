const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.resolve(__dirname,"./public")));

<<<<<<< HEAD
app.listen(3030, () => console.log("Server Start in http://localhost:3030"))
=======
/* app.listen(3000, () => console.log("Server Start in http://localhost:3000")) */

app.set("port", process.env.PORT ||3000)

app.listen(app.get("port"), () => console.log("Server Start in http://localhost:3000"))
>>>>>>> 0dda56f1c3ac522de56ac8e32b8fa6648d4bc3db

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views", "home.html")))
app.get("/login", (req, res) => res.sendFile(path.join(__dirname, "views", "login.html")))
app.get("/register", (req, res) => res.sendFile(path.join(__dirname, "views", "register.html")))