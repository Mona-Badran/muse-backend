export default (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            user_type_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: 'users',
            timestamps: true,
            underscored: true,
        }
    );

    User.associate = (models) => {
        User.belongsTo(models.UserType, {
            foreignKey: 'user_type_id',
            as: 'user_type',
        });
    };

    return User;
};