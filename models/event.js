export default (sequelize, DataTypes) => {
    const Event = sequelize.define(
        'Event',
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
    return Event;
};