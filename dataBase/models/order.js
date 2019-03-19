'use strict';
module.exports = (sequelize, DataTypes) => {
    const order = sequelize.define('order', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            message: {
                type: DataTypes.STRING
            },
            sum: {
                type: DataTypes.FLOAT
            },
            time: {
                type: DataTypes.DATE
            },
            type_of_paid_id: {
                type: DataTypes.INTEGER
            }
        },
        {
            tableName: 'order',
            timestamps: false
        }
    );

    const Type_payments = sequelize.import('./payments_type.js');
    order.belongsTo(Type_payments, {foreignKey: 'type_of_pay_id'});

    return order;
};
