'use strict';
module.exports = (sequelize, DataTypes) => {
    const payments_type = sequelize.define('payments_type', {
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
    return payments_type;
};
