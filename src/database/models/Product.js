module.exports = (sequelize, dataTypes) => {
    let alias = 'Product'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(2000),
            allowNull: false
        },
        image: {
            /* type: dataTypes.BIGINT(10).UNSIGNED, */
            allowNull: false
        },
        offer: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: true
        },
        outstanding: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: true
        },
        discount: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: true
        },
        
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Product = sequelize.define(alias,cols,config);

    Product.associate = function(models){
        Product.belongsTo(models.brand, {
        as: "brands",
        foreignKey: "brand_id"
        });
        Product.belongsToMany(models.color, {
            as: "colors",
            through: "color_id",
            foreignKey: "product_id",
            otherKey: "color_id",
            timestamps: false
            });
        }

    return Product
};