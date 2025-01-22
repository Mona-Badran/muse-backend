export default (sequelize, DataTypes) => {
    const Image = sequelize.define(
        'Image',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            image_url:
            {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            user_id:
            {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            ML_result_id:
            {
                type: DataTypes.INTEGER,
            },
        },
        {
            tableName: 'images',
            timestamps: false,
        }
    );

    Image.associate = (models) => {
        Image.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user',
        });
        Image.belongsTo(models.MLResult, {
            foreignKey: 'ML_result_id',
            as: 'ML_result',
        });
    };
    return Image;
};