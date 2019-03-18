'use strict';
module.exports = (sequelize, DataTypes) => {
    const type_drink = sequelize.define('type_drink', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            type: {
                type: DataTypes.STRING
            }
        },
        {
            tableName: 'type_drink',
            timestamps: false
        }
    );
    return type_drink;
};
