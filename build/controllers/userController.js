"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import only what we need from express
var express_1 = require("express");
var mssql = require("mssql");
// Assign router to the express.Router() instance
var router = express_1.Router();
var dbConfig = {
    server: "gnosisstaging-db.cmwgheiciguq.us-east-1.rds.amazonaws.com",
    database: "Datawarehouse",
    user: "sa",
    password: "FQvP(rWdp4pD",
    port: 1433,
    requestTimeout: 30000
};
var _pool = null;
mssql.connect(dbConfig).then(function (pool) {
    _pool = pool;
}).catch(function (err) {
    console.log(err);
});
mssql.on('error', function (err) {
    console.log(err);
});
// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /user
router.get('/', function (req, res) {
    // Reply with a hello world when no name param is provided
    // this.user.getScatterPlotUsers()
    res.send('users controller');
});
router.get('/:name', function (req, res) {
    // Extract the name from the request parameters
    var name = req.params.name;
    // Greet the given name
    res.send("Hello, " + name);
});
// Export the express.Router() instance to be used by server.ts
exports.UserController = router;
