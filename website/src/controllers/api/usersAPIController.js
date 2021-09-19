const path = require('path');
const db = require('../../database/models');

const usersAPIController = {
    list: async (req, res) => {
        try {
            const users = await db.User.findAll({attributes: ['id','name','email','interes']});
            
            users.forEach(user => {
                user.dataValues.detail = `http://localhost:3001/api/users/${user.id}`
            });

            res.json({  
                count: users.length,
                users: users
            });
        } catch(error) {
            throw error;
        }
    },
    detail: async (req, res) => {
        try {
            const user = await db.User.findByPk(req.params.id);

            res.json({
                id: user.id,
                name: user.name,
                email: user.email,
                interes: user.interes,
                image: `http://localhost:3001/uploads/users/${user.image}`
            })
        } catch (error) {
            throw error;
        }
}
}

module.exports = usersAPIController;