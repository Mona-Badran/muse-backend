export default (sequelize, DataTypes) => {
    const Event = sequelize.define(
        'Event',
        {
            name: 
            {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
    );
    return Event;
};