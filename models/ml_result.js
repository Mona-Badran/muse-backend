export default (sequelize, DataTypes) => {
    const MLResult = sequelize.define(
        'MLResult',
        {
            style: 
            {
                type: DataTypes.STRING,
            },
        },
    );
    return MLResult;
};