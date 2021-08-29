module.exports = (sequelize, DataTypes) => {  
    let alias = 'Product'; 
    let cols = {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,         
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false, 
                unique: true,
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: true, 
            },
            brandId: { 
                type: DataTypes.INTEGER,
                allowNull: true, 
            },
            categoriesId: { 
                type: DataTypes.INTEGER,
                allowNull: false, 
            },        
            description: {
                type: DataTypes.STRING(200),
                allowNull: true
            },
            image: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            offer: {
                type: DataTypes.BIGINT(10).UNSIGNED,
                allowNull: true
            },
            outstanding: {
                type: DataTypes.BIGINT(10).UNSIGNED,
                allowNull: true
            },
            discount: {
                type: DataTypes.BIGINT(10).UNSIGNED,
                allowNull: true
            }
    };

    let config = {
        timestamps: false,
    }
    const Product = sequelize.define(alias,cols,config);

    Product.associate = (models) =>{

        Product.belongsToMany(models.Color, {
            as: 'colors',
            through: 'colorsProducts',
            foreignKey: 'productId',
            other: 'colorsId',
            timestamps: false
        })

        Product.belongsToMany(models.Size, {
            as: "sizes",
            through: 'sizesProducts',
            foreignKey: 'productId',
            other: 'sizesId',
            timestamps: false
        })

        Product.belongsTo(models.Brand, {
            as: "brand",
            foreignKey: "brandId"
        })

        Product.belongsTo(models.Category, {
            as: "categories",
            foreignKey: "categoriesId"
        })

        /* Product.hasMany(models.Shopping), {
            as: "shopping",
            foreignKey: "productId"
        } */

        
    }

    return Product
};