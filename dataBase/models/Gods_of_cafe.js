'use strict';
module.exports = (sequelize, DataTypes) => {
    const Gods_of_cafe = sequelize.define('gods_of_cafe', {
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
            tableName: 'gods_of_cafe',
            timestamps: false
        }
    );

    return Gods_of_cafe;
};
