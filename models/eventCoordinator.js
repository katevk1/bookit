module.exports = function(sequelize, DataTypes) {
    var EventCoordinator = sequelize.define("EventCoordinator", {
        id: {
            type: DataTypes.INTEGER,
            autoincrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        genre: {
            type: DataTypes.STRING
        }
    })
    return EventCoordinator
}