module.exports = (sequelize, DataTypes)=> {
    const User = sequelize.define('User',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },

        password: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'user',
        timestamps:false

    });
    return User;
};
