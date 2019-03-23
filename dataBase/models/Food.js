module.exports = (sequelize, type)=>{
    const Food =  sequelize.define('Food',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: type.STRING,
            allowNull: false
        },
        img:{
            type: type.STRING,
            allowNull: false
        },
        ingredients:{
            type: type.STRING,
            allowNull: true
        },
        typeFoodId:{
            type: type.INTEGER,
            allowNull: true
        },
        menuId:{
            type: type.INTEGER,
            allowNull: true
        },
        weight:{
            type: type.INTEGER,
            allowNull: true
        },
        price:{
            type: type.INTEGER,
            allowNull: true
        },
        about:{
            type: type.STRING,
            allowNull: true
        }
    },{
        tableName:'food',
        timestamps: false
    });
    const typeFoodId = sequelize.import('./Food.js');
    Food.belongsTo(typeFoodId,{foreignKey: 'typeFoodId'});
    const menuId = sequelize.import('./Menu.js');
    Food.belongsTo(menuId,{foreignKey: 'menuId'});
    return Food;
};