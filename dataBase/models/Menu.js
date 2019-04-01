module.exports = (sequelize, DataTypes)=> {
    const Menu = sequelize.define('Menu',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        cafe_id: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'menu',
        timestamps:false

    });
    const Cafe = sequelize.import('./Cafe.js');
    Menu.belongsTo(Cafe, {foreignKey:'cafe_id'});
    return Menu;
};
