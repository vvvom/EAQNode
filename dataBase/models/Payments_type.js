module.export = (sequelize, DataTypes)=> {
    const payments_type = sequelize.define('payments_type',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        type: {
            type: DataTypes.STRING
        },

    }, {
        tableName: 'payments_type',
        timestamps:false

    });
    return payments_type;
}
