module.exports = (sequelize, dataTypes) => {
    let alias = 'Shopping'
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
            },
        productId: { 
                type: dataTypes.INTEGER,
                allowNull: true, 
            },
        userId: { 
                type: dataTypes.INTEGER,
                allowNull: true, 
            },
        quantity: { 
                type: dataTypes.INTEGER,
                allowNull: true, 
            }
    };
    let config = {
        timestamps: true
    }
    const Shopping = sequelize.define(alias,cols,config)

    Shopping.associate = (models) => {
        Shopping.belongsTo(models.User, {
            as: 'users',
            foreignKey: 'userId'
        })
        Shopping.belongsTo(models.Product, {
            as: 'products',
            foreignKey: 'productId'
        })
        Shopping.belongsToMany(models.Order, {
            as: 'orders',
            through: 'shoppingOrder',
            foreignKey: 'shoppingId',
            other: 'orderId'
        })
    }
    
    return Shopping
} 