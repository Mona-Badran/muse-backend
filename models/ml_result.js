export default (sequelize, DataTypes) => {
    const MLResult = sequelize.define(
        'MLResult',
    );
    return MLResult;
};