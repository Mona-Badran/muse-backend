module.exports = (sequelize, DataTypes) => {
    const UserType = sequelize.define(
        'UserType',
        {
            user_type: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            tableName: 'user_types',
            timestamps: true,
            underscored: true,
        }
    );
    UserType.associate = (models) => {
        UserType.hasMany(models.User, {
        foreignKey: 'user_type_id',
        as: 'users',
        });
    };
};