module.exports = (sequelize, DataTypes)=> {
    const Drink= sequelize.define('Drink',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },

        ingredients: {
            type: DataTypes.STRING
        },
        type_drink_id: {
            type: DataTypes.INTEGER
        },
        price: {
            type:DataTypes.FLOAT
        },
        volume: {
            type:DataTypes.INTEGER
        },
        menu_id: {
            type: DataTypes.INTEGER
        },
        degrees: {
            type: DataTypes.FLOAT
        },
        about: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'drink',
        timestamps:false

    });
   const Menu = sequelize.import('./Menu.js');
   Drink.belongsTo(Menu, {foreignKey: 'menu_id'});
   const TypeDrink = sequelize.import('./TypeDrink.js');
   Drink.belongsTo(TypeDrink, {foreignKey:'type_drink_id'});



    return Drink;
}
