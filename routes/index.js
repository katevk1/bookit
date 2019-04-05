import axios from 'axios';

const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");


// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

axios.get('/cats')
  .then(function () {
     console.log("cats don't dance")
    //  console.log(response);
   
  })
  .catch(function (error) {
    console.log(error);
  });
 
// axios.get('/user', {
//     params: {
//       band_name
//     }
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

module.exports = router;

//define get/post routes
//sequelize 
//models
//creating a band for post create
//12-blog-crud
//create a route and make the connection with a console log