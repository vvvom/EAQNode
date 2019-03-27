'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
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
            tableName: 'user',
            timestamps: false
        }
    );

    return User;
};
