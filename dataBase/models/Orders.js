module.exports = (sequelize, type)=>{
    const Orders = sequelize.define('Orders',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        time:{
            type: type.DATE,
            allowNull: false
        },
        typeOfPayId:{
            type: type.INTEGER,
            allowNull: false
        },
        sum:{
            type: type.INTEGER,
            allowNull: false
        }
    },{
        tableName:'orders',
        timestamps: false
    });
    const typeOfPayId = sequelize.import('./TypeOfPay.js');
    Orders.belongsTo(typeOfPayId,{foreignKey: 'typeOfPayId'});
    return Orders;
};