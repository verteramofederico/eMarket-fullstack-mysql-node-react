// json para borrar
const User = require("../models/users")

// Modelos Sequelize
const db = require('../database/models');
const sequelize = require("sequelize");
const { Op } = sequelize;
const { like } = Op

function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	let emailInCookie = req.cookies.user;
	 //let userFromCookie = User.findByField("email", emailInCookie);
	
	db.User.findOne({ where: { email: emailInCookie} })
	.then ((userFromCookie) => {
	if (userFromCookie) {
		req.session.userLogged = userFromCookie
	}})

	if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	}
	
	next();
}

module.exports = userLoggedMiddleware;