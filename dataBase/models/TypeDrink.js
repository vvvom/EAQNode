module.exports = (sequelize, DataTypes)=> {
    const TypeDrink = sequelize.define('TypeDrink',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        type: {
            type: DataTypes.STRING
        },

    }, {
        tableName: 'type_drink',
        timestamps:false

    });
    return TypeDrink;
}
