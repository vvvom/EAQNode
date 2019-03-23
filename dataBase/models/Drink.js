module.exports = (sequelize, type)=>{
    const Drink = sequelize.define('Drink',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: type.STRING,
            allowNull: false
        },
        ingredients:{
            type: type.STRING,
            allowNull: true
        },
        typeDrinkId:{
            type: type.INTEGER,
            allowNull: true
        },
        menuId:{
            type: type.INTEGER,
            allowNull: true
        },
        scope:{
            type: type.INTEGER,
            allowNull: true
        },
        degrees:{
            type: type.FLOAT,
            allowNull: true
        },
        price:{
            type: type.FLOAT,
            allowNull: true
        },
        about:{
            type: type.STRING,
            allowNull: true
        }
    },{
        tableName:'drink',
        timestamps: false
    });
    const typeDrinkId = sequelize.import('./TypeDrink.js');
    Drink.belongsTo(typeDrinkId,{foreignKey: 'typeDrinkId'});
    const menuId = sequelize.import('./Menu.js');
    Drink.belongsTo(menuId,{foreignKey: 'menuId'});
    return Drink;
};