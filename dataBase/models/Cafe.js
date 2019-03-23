module.exports = (sequelize, type)=>{
    return sequelize.define('Cafe',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: type.STRING,
            allowNull: false
        },
        password:{
            type: type.STRING,
            allowNull: false
        }
    },{
        tableName:'cafe',
        timestamps: false
    })
};