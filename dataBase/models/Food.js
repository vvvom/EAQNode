module.exports = (sequelize, type)=>{
    const Food =  sequelize.define('Food',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
            type: type.STRING,
            allowNull: false
        },
        typeFoodId:{
            type: type.INTEGER,
            allowNull: false
        },
        ingridients:{
            type: type.INTEGER,
            allowNull: false
        },
        img:{
            type: type.STRING,
            allowNull: false
        },
        weight:{
            type: type.INTEGER,
            allowNull: false
        },
        price:{
            type: type.INTEGER,
            allowNull: false
        }
    },{
        tableName:'food',
        timestamps: false
    });
    const typeFoodId = sequelize.import('./Food.js');
    Food.belongsTo(typeFoodId,{foreignKey: 'typeFoodId'});
    return Food;
};