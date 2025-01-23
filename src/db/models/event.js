export default (sequelize, DataTypes) => {
    const Event = sequelize.define(
        'Event',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name:
            {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description:
            {
                type: DataTypes.TEXT,
            },
            ar_assets:
            {
                type: DataTypes.STRING,
            },
            start_time:
            {
                type: DataTypes.DATE,
            },
            end_time:
            {
                type: DataTypes.DATE,
            },
        },
        {
            tableName: 'events',
            timestamps: false,
        }
    );
    Event.associate = (models) => {
        Event.belongsToMany(models.User, {
            through: 'Attend',
            foreignKey: 'event_id',
            as: 'attendees',
        });
    };

    return Event;
};