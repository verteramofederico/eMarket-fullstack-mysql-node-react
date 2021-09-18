module.exports = (sequelize, DataTypes) => {
    let alias = 'Color';
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
            },
            value: {
                type: DataTypes.STRING,
                allowNull: false, 
                unique: true,
            }
    };

    let config = {
        timestamps: false,
    };

    const Color = sequelize.define(alias,cols,config);

    Color.associate = (models) => {
        Color.belongsToMany(models.Product, {
            as: 'products',
            through: 'colorsProducts',
            foreignKey: 'colorsId',
            other: 'productId',
            timestamps: false
        })
    }

    return Color;
}
