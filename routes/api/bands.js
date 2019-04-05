const router = require("express").Router();
const bandsController = require("../../controllers/bandsController");

router.route("/bands")
  .get(bandsController.findAll)
  .post(bandsController.create);

router.route("/bands/:id")
  .get(bandsController.findById)
  .put(bandsController.update)
  .delete(bandsController.remove);

module.exports = router;