module.exports = (sequelize, type)=>{
    const TypeFood = sequelize.define('TypeFood',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type:{
            type: type.STRING,
            allowNull: false
        },
        menu_id:{
            type: type.INTEGER,
            allowNull: true
        }
    },{
        tableName:'type_food',
        timestamps: false
    });
    const menuId = sequelize.import('./Menu.js');
    TypeFood.belongsTo(menuId,{foreignKey: 'menu_id'});
    return TypeFood
};