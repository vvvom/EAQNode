module.export = (sequelize, DataTypes)=> {
    const food = sequelize.define('food',{
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
        }
    }, {
        tableName: 'food',
        timestamps:false

    });
    const typeFood = sequelize.import('./Type_food.js');
    food.belongsTo(typeFood, {foreignKey: 'type_food_id'});
    return food;
}
