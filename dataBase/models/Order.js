module.export = (sequelize, DataTypes)=> {
    const Order = sequelize.define('Order',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        sum: {
            type: DataTypes.FLOAT
        },
        time: {
            type: DataTypes.DATE
        },
        type_of_pay_id:{
            type: DataTypes.INTEGER
        },
        cafe_id :{
            type:DataTypes.INTEGER
        },
        table_number :{
            type:DataTypes.INTEGER
        }
    }, {
        tableName: 'order',
        timestamps:false

    });
    const Cafe = sequelize.import('./Cafe.js');
    Order.belongsTo(Cafe, {foreignKey: 'cafe_id'});
    const PaymentsType = sequelize.import('./PaymentsType.js');
    Order.belongsTo(PaymentsType, {foreignKey: 'type_of_pay_id'});
    return Order;
};
