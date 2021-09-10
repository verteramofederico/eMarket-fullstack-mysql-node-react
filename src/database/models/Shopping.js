/* module.exports = (sequelize, dataTypes) => {
    let alias = 'Shopping'
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
            },
        name: {
            type: dataTypes.STRING,
            allowNull: false, 
            },
        email: {
            type: dataTypes.STRING,
            allowNull: false, 
            unique: true,
            },
        password: {
            type: dataTypes.STRING,
            allowNull: false, 
            },
        domicilio: {
            type: dataTypes.STRING,
            },
            interes: {
            type: dataTypes.STRING,
            },
            suscripcion: {
            type: dataTypes.BOOLEAN,
            },
            image: {
            type: dataTypes.STRING(100),
            allowNull: false
            },
            createdAt: {
                type: dataTypes.DATE,
                allowNull: true, 
                defaultValue: dataTypes.NOW
            },
            updatedAt: {
                type: dataTypes.DATE,
                allowNull: true, 
                defaultValue: dataTypes.NOW
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
    }
    
    return Shopping
} */