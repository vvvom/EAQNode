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
        menu_id: {
            type: DataTypes.INTEGER
        },

    }, {
        tableName: 'type_drink',
        timestamps:false

    });
    return TypeDrink;
}
