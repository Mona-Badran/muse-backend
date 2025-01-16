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
    return Event;
};