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
        type_food_id:{
            type: type.INTEGER,
            allowNull: true
        },
        menu_id:{
            type: type.INTEGER,
            allowNull: true
        },
        weight:{
            type: type.INTEGER,
            allowNull: false
        },
        price:{
            type: type.INTEGER,
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
        tableName:'food',
        timestamps: false
    });
    const typeFoodId = sequelize.import('./TypeFood.js');
    Food.belongsTo(typeFoodId,{foreignKey: 'type_food_id'});
    const menuId = sequelize.import('./Menu.js');
    Food.belongsTo(menuId,{foreignKey: 'menu_id'});
    const cafeId = sequelize.import('./Cafe.js');
    Food.belongsTo(cafeId,{foreignKey: 'cafe_id'});
    return Food;
};