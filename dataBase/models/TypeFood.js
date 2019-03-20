module.exports = (sequelize, type)=>{
    return sequelize.define('TypeFood',{
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
        tableName:'type_food',
        timestamps: false
    });
};