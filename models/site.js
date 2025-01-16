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
        },
    );
    return Site;
};