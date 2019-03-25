module.exports = (sequelize, type)=>{
    const Order = sequelize.define('Order',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sum:{
            type: type.FLOAT,
            allowNull: true
        },
        created_at:{
            type: type.DATE,
            allowNull: false
        },
        type_of_pay_id:{
            type: type.INTEGER,
            allowNull: true
        },
        cafe_id:{
            type: type.INTEGER,
            allowNull: true
        },
        table_number_id:{
            type: type.INTEGER,
            allowNull: true
        }
    },{
        tableName:'order',
        timestamps: false
    });
    const typeOfPayId = sequelize.import('./TypeOfPay.js');
    Order.belongsTo(typeOfPayId,{foreignKey: 'type_of_pay_id'});
    const cafeId = sequelize.import('./Cafe.js');
    Order.belongsTo(cafeId,{foreignKey: 'cafe_id'});
    return Order;
};