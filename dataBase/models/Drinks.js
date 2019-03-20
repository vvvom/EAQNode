module.exports = (sequelize, type)=>{
    const Drinks = sequelize.define('Drinks',{
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
        typeDrinkId:{
            type: type.INTEGER,
            allowNull: false
        },
        ingridients:{
            type: type.INTEGER,
            allowNull: false
        },
        scope:{
            type: type.INTEGER,
            allowNull: false
        },
        price:{
            type: type.INTEGER,
            allowNull: false
        }
    },{
        tableName:'drinks',
        timestamps: false
    });
    const typeDrinkId = sequelize.import('./TypeDrinks.js');
    Drinks.belongsTo(typeDrinkId,{foreignKey: 'typeDrinkId'});
    return Drinks;
};