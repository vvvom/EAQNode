'use strict';
module.exports = (sequelize, DataTypes) => {
    const Cafe = sequelize.define('Cafe', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING
            },
            password: {
                type: DataTypes.STRING
            }
        },
        {
            tableName: 'cafe',
            timestamps: false
        }
    );
    return Cafe;
};
