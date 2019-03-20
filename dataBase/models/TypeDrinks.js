module.exports = (sequelize, type)=>{
    return sequelize.define('TypeDrinks',{
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
        tableName:'type_drinks',
        timestamps: false
    });
};