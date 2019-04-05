module.exports = (sequilize, DataTypes) => {
    const Offer = sequilize.define('Offer', {
        description: {
            type: DataTypes.STRING
        },
    })
    Offer.associate = function(models){
        Offer.belongsTo(models.Band, {
            onDelete: "cascade"
        })
    }
    Offer.associate = function(models){
        Offer.belongsTo(models.User, {
            onDelete: "cascade"
        })
    }
    return Offer
}