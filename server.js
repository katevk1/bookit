// require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var Sequelize = require("sequelize");

var app = express();
var PORT = process.env.PORT || 3001;
var db = require("./models");


//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("./client/public/"));
app.set("view engine", "ejs");

//Routes aka Controller
require("./routes/apiRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}


//Starting server  
db.sequelize.sync({ force: true }).then(function(){
    app.listen(PORT, function() {
      console.log("========================")
        console.log(
            "Listening on port " + PORT + " Visit http://localhost:" + PORT + "/"
        )
        console.log("========================")
    })
})






module.exports = app