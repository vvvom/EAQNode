'use strict';
module.exports = (sequelize, DataTypes) => {
    const Food = sequelize.define('Food', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING
            },
            ingredients: {
                type: DataTypes.STRING
            },
            type_food_id: {
                type: DataTypes.INTEGER
            },
            menu_id: {
                type: DataTypes.INTEGER
            },
            price: {
                type: DataTypes.FLOAT
            },
            weight: {
                type: DataTypes.INTEGER
            },
            about: {
                type: DataTypes.STRING
            },
            cafe_id: {
                type: DataTypes.INTEGER
            }
        },
        {
            tableName: 'food',
            timestamps: false
        }
    );
    const Type_food = sequelize.import('./Type_food.js');
    Food.belongsTo(Type_food, {foreignKey: 'type_food_id'});

    const Menu_id = sequelize.import('./Menu.js');
    Food.belongsTo(Menu_id, {foreignKey: 'menu_id'});

    const Cafe_id = sequelize.import('./Cafe.js');
    Food.belongsTo(Cafe_id, {foreignKey: 'cafe_id'});

    return Food;
};
