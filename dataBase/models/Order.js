module.export = (sequelize, DataTypes)=> {
    const order = sequelize.define('order',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        massage: {
            type: DataTypes.STRING
        },

        sum: {
            type: DataTypes.FLOAT
        },
        time: {
            type: DataTypes.DATE
        },
        type_of_pay_id:{
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'order',
        timestamps:false

    });
    const paymentsType = sequelize.import('./Payments_type.js');
    order.belongsTo(paymentsType, {foreignKey: 'type_of_pay_id'});
    return order;
}
