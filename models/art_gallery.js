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
};