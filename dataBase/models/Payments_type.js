'use strict';
module.exports = (sequelize, DataTypes) => {
    const Payments_type = sequelize.define('Payments_type', {
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
            tableName: 'payments_type',
            timestamps: false
        }
    );
    return Payments_type;
};
