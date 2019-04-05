

module.exports = function(sequelize, DataTypes) {
    var Band = sequelize.define("Band", {
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
        },
        imageUrl:  {
            type: DataTypes.STRING
        }
    })
    Band.associate = function(models){
        Band.hasMany(models.Offer)
    }
    return Band
}