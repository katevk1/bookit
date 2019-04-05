var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;
var db = require("./models");
var routes = require('./routes')


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("./public/"));
app.set("view engine", "ejs");

app.use(routes);

var syncOptions = { force: false };

if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

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