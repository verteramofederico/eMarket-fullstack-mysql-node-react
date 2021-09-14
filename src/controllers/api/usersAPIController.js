const path = require('path');
const db = require('../../database/models');
const sequelize = require("sequelize");
const { Op } = sequelize;
const moment = require('moment');
const { like } = Op


const usersAPIController = {
    'list': (req, res) => {
        db.User.findAll()
        .then(users => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: users.length,
                    url: 'api/users'
                },
                data: {
                    count: users.length,
                    users
                }
            }
                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
        db.User.findByPk(req.params.id)
            .then(user => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: user.length,
                        url: '/api/user/:id'
                    },
                    data: user
                }
                res.json(respuesta);
            });
    }    
}

module.exports = usersAPIController;