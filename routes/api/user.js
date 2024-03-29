const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/user"
router.route("/user")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/user/:id"
router
  .route("/user/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;