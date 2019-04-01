module.exports = (sequelize, DataTypes)=> {
    const Food = sequelize.define('Food',{
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
        type_food_id: {
            type: DataTypes.INTEGER
        },
        menu_id: {
            type: DataTypes.INTEGER
        },
        price: {
            type: DataTypes.FLOAT
        },
        weight: {
            type: DataTypes.INTEGER
        },
        about: {
            type: DataTypes.STRING
        },
        cafe_id: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'food',
        timestamps:false

    });
    const Menu = sequelize.import('./Menu.js');
    Food.belongsTo(Menu, {foreignKey: 'menu_id'});
    const TypeFood = sequelize.import('./TypeFood.js');
    Food.belongsTo(TypeFood, {foreignKey: 'type_food_id'});
    const Cafe = sequelize.import('./Cafe.js');
    Food.belongsTo(TypeFood, {foreignKey: ' cafe_id'});

    return Food;

};
