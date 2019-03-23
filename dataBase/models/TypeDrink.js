module.exports = (sequelize, type)=>{
    return sequelize.define('TypeDrink',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type:{
            type: type.STRING,
            allowNull: false
        }
    },{
        tableName:'type_drink',
        timestamps: false
    });
};