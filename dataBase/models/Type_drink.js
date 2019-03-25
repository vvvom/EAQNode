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
            }
        },
        {
            tableName: 'type_drink',
            timestamps: false
        }
    );
    return Type_drink;
};
