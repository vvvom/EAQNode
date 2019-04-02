module.exports = (sequelize, type) => {
    const Menu = sequelize.define('Menu', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: type.STRING,
            allowNull: false
        },
        cafe_id: {
            type: type.INTEGER,
            allowNull: true
        }
    }, {
        tableName: 'menu',
        timestamps: false
    });
    const cafeId = sequelize.import('./Cafe.js');
    Menu.belongsTo(cafeId, {foreignKey: 'cafe_id'});
    return Menu;
};