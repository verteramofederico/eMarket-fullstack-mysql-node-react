module.exports = (sequelize, DataTypes) => {
    let alias = 'PaymentMethod';
    let cols = {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,         
            },
            method: {
                type: DataTypes.STRING,
                allowNull: false, 
                unique: true,
            }
            
    };

    let config = {
        timestamps: false,
    };

    const PaymentMethod = sequelize.define(alias,cols,config);

    PaymentMethod.associate = (models) => {
        PaymentMethod.hasMany(models.Order, {
            as: 'order',
            foreignKey: 'paymentId'
        })
    }

    return PaymentMethod;
}