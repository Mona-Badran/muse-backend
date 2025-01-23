export default (sequelize, DataTypes) => {
    const Attend = sequelize.define(
        'Attend',
        {
            user_id: 
            {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            event_id: 
            {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: 'attend',
            timestamps: false,
        }
    );
    return Attend;
};