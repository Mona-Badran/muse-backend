module.exports = (sequelize, DataTypes) => {
    const UserType = sequelize.define(
        'UserType',
        {
            user_type: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }
    );
};