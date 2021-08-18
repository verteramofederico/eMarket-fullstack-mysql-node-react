function productAuthMiddleware(req, res, next) {
	if (!req.session.userLogged || 
        !req.session.userLogged.email.includes("gaf")) {
		return res.redirect('/user/login');
	}
	next();
}

module.exports = productAuthMiddleware;