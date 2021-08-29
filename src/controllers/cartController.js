const router = require("../routes/cartRouter")

// Sequelize
const db = require('../database/models');
const sequelize = require("sequelize");
const { Op } = sequelize;


const cartController = {

    index: async (req, res) => {        
        try {
            const products = await db.Product.findAll({
                include: ['colors', "sizes", "brand", "categories"]
            });
            const user = await db.User.findByPk(1/* req.session.userLogged.id */);
            const shopping = await db.Shopping.findAll({where: {userId: user}});
            res.render("cart/index", {
                user: user,
                products: products,
                shopping: shopping
            })
            
        } catch (error) {
            
        }       
            }
    }


module.exports = cartController