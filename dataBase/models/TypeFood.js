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

    }, {
        tableName: 'type_food',
        timestamps:false

    });
    return TypeFood;
}
