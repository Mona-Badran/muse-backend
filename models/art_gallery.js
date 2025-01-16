export default (sequelize, DataTypes) => {
    const ArtGallery = sequelize.define(
        'ArtGallery',
        {
            name: 
            {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: 
            {
                type: DataTypes.TEXT,
            },
        },
    );
};