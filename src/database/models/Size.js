module.exports = (sequelize, dataTypes) => {
    let alias = 'Size';
    let cols = {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,         
            },
            name: {
                type: dataTypes.STRING,
                allowNull: false, 
                unique: true,
            }
    };

    let config = {
        timestamps: false,
    };

    const Size = sequelize.define(alias,cols,config);

    Size.associate = (models) => {
        Size.belongsToMany(models.Product, {
            as: 'products',
            through: 'sizesProducts',
            foreignKey: 'sizesId',
            other: 'productId',
            timestamps: false
        })
    }

    return Size;
}
