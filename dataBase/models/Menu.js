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
            name: {
                type: DataTypes.STRING
            }
        },
        {
            tableName: 'menu',
            timestamps: false
        }
    );
    const Cafe = sequelize.import('./Cafe.js');
    Menu.belongsTo(Cafe, {foreignKey: 'cafe_id'});

    return Menu;
};
