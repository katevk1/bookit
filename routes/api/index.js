const router = require("express").Router();
const offerRoutes = require("./offers");
const userRoutes = require("./user");
const bandRoutes = require("./bands");

router.use("/offers", offerRoutes);
router.use("/user", userRoutes);
router.use("/bands", bandRoutes);

module.exports = router;