export default (sequelize, DataTypes) => {
    const Site = sequelize.define(
        'Site',
        {
            name: 
            {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
    );
    return Site;
};