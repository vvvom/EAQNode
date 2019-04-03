'use strict';
module.exports = (sequelize, DataTypes) => {
    const Type_food = sequelize.define('Type_food', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            type: {
                type: DataTypes.STRING
            },
            menu_id: {
                type: DataTypes.INTEGER
            }
        },
        {
            tableName: 'type_food',
            timestamps: false
        }
    );

    const Menu_id = sequelize.import('./Menu.js');
    Type_food.belongsTo(Menu_id, {foreignKey: 'menu_id'});

    return Type_food;
};