'use strict';
module.exports = (sequelize, DataTypes) => {
    const Drink = sequelize.define('Drink', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING
            },
            ingredients: {
                type: DataTypes.TEXT
            },
            type_drink_id: {
                type: DataTypes.INTEGER
            },
            price: {
                type: DataTypes.INTEGER
            },
            volume: {
                type: DataTypes.INTEGER
            },
            menu_id: {
                type: DataTypes.INTEGER
            },
            degrees: {
                type: DataTypes.FLOAT
            },
            about: {
                type: DataTypes.STRING
            },
            cafe_id: {
                type: DataTypes.INTEGER
            }
        },
        {
            tableName: 'drink',
            timestamps: false
        }
    );
    const Type_drink = sequelize.import('./Type_drink.js');
    Drink.belongsTo(Type_drink, {foreignKey: 'type_drink_id'});

    const Menu_id = sequelize.import('./Menu.js');
    Drink.belongsTo(Menu_id, {foreignKey: 'menu_id'});

    const Cafe_id = sequelize.import('./Cafe.js');
    Drink.belongsTo(Cafe_id, {foreignKey: 'cafe_id'});

    return Drink;
};
