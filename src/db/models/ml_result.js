export default (sequelize, DataTypes) => {
    const MLResult = sequelize.define(
        'MLResult',
        {
            style:
            {
                type: DataTypes.STRING,
            },
            common_artists:
            {
                type: DataTypes.STRING,
            },
            description:
            {
                type: DataTypes.TEXT,
            },
        },
        {
            tableName: 'ML_results',
            timestamps: false,
        }
    );
    MLResult.associate = (models) => {
        MLResult.hasMany(models.Image, {
            foreignKey: 'ML_result_id',
            as: 'images',
        });
    };

    return MLResult;
};