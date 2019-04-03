module.exports = (sequilize, DataTypes) => {
    const Offer = sequilize.define('Offer', {
        description: {
            type: DataTypes.STRING
        },
        basePay: {
            type: DataTypes.INTEGER
        }
    })
    Offer.associate = function(models){
        Offer.belongsTo(models.Band, {
            onDelete: "cascade"
        })
    }
    Offer.associate = function(models){
        Offer.belongsTo(models.EventCoordinator, {
            onDelete: "cascade"
        })
    }
    return Offer
}