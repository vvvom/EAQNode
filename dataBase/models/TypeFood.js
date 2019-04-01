module.exports = (sequelize, DataTypes)=> {
    const TypeFood = sequelize.define('TypeFood',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        type: {
            type: DataTypes.STRING
        },
        menu_id: {
            type: DataTypes.INTEGER
        },

    }, {
        tableName: 'type_food',
        timestamps:false

    });
    return TypeFood;
}
