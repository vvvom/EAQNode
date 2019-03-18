'use strict';
module.exports = (sequelize, DataTypes) => {
    const type_food = sequelize.define('type_food', {
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
            tableName: 'type_food',
            timestamps: false
        }
    );
    return type_food;
};