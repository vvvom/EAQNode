module.exports = (sequelize, type)=>{
    const Menu = sequelize.define('Menu',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cafe_id:{
            type: type.INTEGER,
            allowNull: true
        },
        name:{
            type: type.STRING,
            allowNull: false
        }
    },{
        tableName:'menu',
        timestamps: false
    });
    const cafeId = sequelize.import('./Cafe.js');
    Menu.belongsTo(cafeId,{foreignKey: 'cafe_id'});
    return Menu;
};