module.exports = (sequelize, type)=>{
    return sequelize.define('TypeFood',{
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
        tableName:'type_food',
        timestamps: false
    });
};