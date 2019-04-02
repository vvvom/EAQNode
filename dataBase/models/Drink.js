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
        type_drink_id:{
            type: type.INTEGER,
            allowNull: true
        },
        menu_id:{
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
        },
        cafe_id:{
            type: type.INTEGER,
            allowNull: true
        }
    },{
        tableName:'drink',
        timestamps: false
    });
    const typeDrinkId = sequelize.import('./TypeDrink.js');
    Drink.belongsTo(typeDrinkId,{foreignKey: 'type_drink_id'});
    const menuId = sequelize.import('./Menu.js');
    Drink.belongsTo(menuId,{foreignKey: 'menu_id'});
    const cafeId = sequelize.import('./Cafe.js');
    Drink.belongsTo(cafeId,{foreignKey: 'cafe_id'});
    return Drink;
};