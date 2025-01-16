export default (sequelize, DataTypes) => {
    const Image = sequelize.define(
        'Image',
        {
            image_url: 
            {
                type: DataTypes.TEXT,
                allowNull: false,
            },
        }
    );
};