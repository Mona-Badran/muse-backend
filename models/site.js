export default (sequelize, DataTypes) => {
    const Site = sequelize.define(
        'Site',
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
            latitude: 
            {
                type: DataTypes.FLOAT,
            },
            longitude: 
            {
                type: DataTypes.FLOAT,
            },
        },
    );
    return Site;
};