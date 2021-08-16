module.exports = (sequelize, DataTypes) => {
    let alias = 'Brand';
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

    const Brand = sequelize.define(alias,cols,config);

    Brand.associate = (models) => {
        Brand.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'brandId'
        })
    }

    return Brand;
}