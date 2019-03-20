module.exports = (sequelize, type)=>{
    return sequelize.define('TypeOfPay',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        type:{
            type: type.STRING,
            allowNull: false
        }
    },{
        tableName:'type_of_pay',
        timestamps: false
    });
};