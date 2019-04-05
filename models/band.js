

module.exports = function(sequelize, DataTypes) {
    var Band = sequelize.define("Band", {
        id: {
            type: DataTypes.INTEGER
        },
        band_name: {
            type: DataTypes.STRING
        },
        genre: {
            type: DataTypes.STRING
        }
    })
    return Band
}