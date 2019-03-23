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
        time:{
            type: type.DATETIME,
            allowNull: false
        },
        typeOfPayId:{
            type: type.INTEGER,
            allowNull: true
        },
        cafeId:{
            type: type.INTEGER,
            allowNull: true
        },
        tableNumberId:{
            type: type.INTEGER,
            allowNull: true
        }
    },{
        tableName:'order',
        timestamps: false
    });
    const typeOfPayId = sequelize.import('./TypeOfPay.js');
    Order.belongsTo(typeOfPayId,{foreignKey: 'typeOfPayId'});
    const cafeId = sequelize.import('./Cafe.js');
    Order.belongsTo(cafeId,{foreignKey: 'cafeId'});
    return Order;
};