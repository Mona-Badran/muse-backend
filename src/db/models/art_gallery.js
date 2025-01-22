export default (sequelize, DataTypes) => {
    const ArtGallery = sequelize.define(
        'ArtGallery',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name:
            {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description:
            {
                type: DataTypes.TEXT,
            },
            images:
            {
                type: DataTypes.TEXT,
            },
            owner_id:
            {
                type: DataTypes.INTEGER,
            },
        },
        {
            tableName: 'art_galleries',
            timestamps: false,
        }
    );
    ArtGallery.associate = (models) => {
        ArtGallery.belongsTo(models.User, {
            foreignKey: 'owner_id',
            as: 'owner',
        });
    };
    return ArtGallery;
};