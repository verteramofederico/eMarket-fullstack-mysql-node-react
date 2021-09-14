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
        orderNumber: { 
                type: dataTypes.INTEGER,
                allowNull: false,
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
        Shopping.belongsTo(models.Product, {
            as: 'products',
            foreignKey: 'productId'
        })
    }
    
    return Shopping
} 