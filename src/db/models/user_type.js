export default (sequelize, DataTypes) => {
    const UserType = sequelize.define(
        'UserType',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
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
    return UserType;
};