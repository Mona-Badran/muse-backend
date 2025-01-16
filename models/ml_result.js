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
    );
    return MLResult;
};