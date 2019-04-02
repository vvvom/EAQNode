module.exports = (sequelize, type)=>{
    const TypeDrink =  sequelize.define('TypeDrink',{
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
        tableName:'type_drink',
        timestamps: false
    });
    const menuId = sequelize.import('./Menu.js');
    TypeDrink.belongsTo(menuId,{foreignKey: 'menu_id'});
    return TypeDrink
};