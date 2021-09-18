module.exports = (sequelize, DataTypes) => {
    let alias = 'Category';
    let cols = {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,         
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false, 
                unique: true,
            }    
        };

    let config = {
        timestamps: false,
    };

    const Category = sequelize.define(alias,cols,config);

    Category.associate = (models) => {
        Category.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'categoriesId'
        })
    }

    return Category;
}