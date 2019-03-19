module.export = (sequelize, DataTypes)=> {
    const menu = sequelize.define('menu',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        cafe_id: {
            type: DataTypes.INTEGER
        },

        food_id: {
            type: DataTypes.INTEGER
        },
        drink_id: {
            type: DataTypes.INTEGER
        },
        order_id: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'menu',
        timestamps:false

    });
    const cafeId = sequelize.import('./Cafe.js');
    menu.belongsTo(cafeId, {foreignKey:"cafe_id"});
    const drinkId = sequelize.import('./Drink.js');
    menu.belongsTo(drinkId, {foreignKey: 'drink_id'});
    const foodId = sequelize.import('./Food.js');
    menu.belongsTo(foodId, {foreignKey: 'food_id'});
    const orderId= sequelize.import('./Order.js');
    menu.belongsTo(orderId, {foreignKey: 'order_id'});
    return menu;
}
