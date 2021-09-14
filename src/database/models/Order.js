module.exports = (sequelize, dataTypes) => {
    let alias = 'Order'
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
            },
        userId: { 
            type: dataTypes.INTEGER,
            allowNull: true, 
            },
        active: {
            type: dataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
                },
        paymentId: { 
                type: dataTypes.INTEGER,
                allowNull: true, 
            }
    };
    let config = {
        timestamps: true
    }
    const Order = sequelize.define(alias,cols,config)

    Order.associate = (models) => {
        Order.belongsTo(models.User, {
            as: 'users',
            foreignKey: 'userId'
        })
        Order.belongsTo(models.PaymentMethod, {
            as: 'paymentMethod',
            foreignKey: 'paymentId'
        })
    }
    
    return Order
} 