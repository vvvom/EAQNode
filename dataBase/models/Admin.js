module.exports = (sequelize, type)=>{
    return sequelize.define('Admin',{
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
        tableName:'admin',
        timestamps: false
    })
};