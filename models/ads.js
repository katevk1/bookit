module.exports = (sequilize, DataTypes) => {
    const Ad = sequilize.define('Ad', {
        description: {
            type: DataTypes.STRING
        },
        basePay: {
            type: DataTypes.INTEGER
        }
    })
    Ad.associate = function(models){
        Ad.belongsTo(models.band, {
            onDelete: "cascade"
        })
    }
    return Ad
}