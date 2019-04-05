module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            autoincrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        }
    })
    User.associate = function(models){
        User.hasMany(models.Offer)
    }
    return User
}