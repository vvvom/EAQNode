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
            }
        },
        {
            tableName: 'type_food',
            timestamps: false
        }
    );
    return Type_food;
};
