'use strict';
module.exports = (sequelize, DataTypes) => {
    const Type_drink = sequelize.define('Type_drink', {
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
            tableName: 'type_drink',
            timestamps: false
        }
    );

    const Menu_id = sequelize.import('./Menu.js');
    Type_drink.belongsTo(Menu_id, {foreignKey: 'menu_id'});


    return Type_drink;
};
