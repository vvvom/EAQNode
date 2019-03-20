module.export = (sequelize, DataTypes)=> {
    const PaymentsType = sequelize.define('Payments_type',{
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
    return PaymentsType;
}
