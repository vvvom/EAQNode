'use strict';
module.exports = (sequelize, DataTypes) => {
    const Menu = sequelize.define('Menu', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
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
        },
        {
            tableName: 'menu',
            timestamps: false
        }
    );
    const Cafe = sequelize.import('./Cafe.js');
    Menu.belongsTo(Cafe, {foreignKey: 'cafe_id'});

    const Food_id = sequelize.import('./Food.js');
    Menu.belongsTo(Food_id, {foreignKey: 'food_id'});

    const Drink_id = sequelize.import('./Drink.js');
    Menu.belongsTo(Drink_id, {foreignKey: 'drink_id'});

    const Order_id = sequelize.import('./Order.js');
    Menu.belongsTo(Order_id, {foreignKey: 'order_id'});

    return Menu;
};
