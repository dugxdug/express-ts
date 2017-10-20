"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* server.js */
var express = require("express");
var welcomeController_1 = require("./controllers/welcomeController");
var userController_1 = require("./controllers/userController");
// Create a new express application instance
var app = express();
// The port the express app will listen on
var port = process.env.PORT || 3000;
// Mount the WelcomeController at the /welcome route
app.use('/welcome', welcomeController_1.WelcomeController);
app.use('/user', userController_1.UserController);
// Serve the application at the given port
app.listen(port, function () {
    // Success callback
    console.log("Listening at http://localhost:" + port + "/");
});
// const sequelize = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: 'mssql',
//     pool: {
//         max:  5,
//         min: 0,
//         idle: 10000
//     },
// });
// sequelize
// .authenticate()
// .then(() => {
//   console.log('Connection has been established successfully.');
// })
// .catch(err => {
//   console.error('Unable to connect to the database:', err);
// });
