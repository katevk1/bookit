const router = require("express").Router();
const offersController = require("../../controllers/offersController");

router.route("/offers")
  .get(offersController.findAll)
  .post(offersController.create);

router.route("/offers/:id")
  .get(offersController.findById)
  .put(offersController.update)
  .delete(offersController.remove);

module.exports = router;