/* module.exports = (sequelize, dataTypes) => {
    let alias = 'Order'
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
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
        Order.belongsTo(models.PaymentMethod, {
            as: 'paymentMethod',
            foreignKey: 'paymentId'
        })
        Order.belongsToMany(models.Shopping, {
            as: 'shoppings',
            through: 'shoppingOrder',
            foreignKey: 'orderId',
            other: 'shoppingId'
        })
    }
    
    return Order
}  */