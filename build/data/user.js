"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getScatterPlotUsers = function (req, pool, success, error) {
    var query = constructQuery(req);
    pool.request().query(query).then(function (result) {
        //.input('input_parameter', sql.Int, value)
        //console.dir(result.recordset.length);
        var scatterplot = {
            scatterplot: {
                users: [],
                averages: { organizations: [], serviceareas: [], facilities: [], departmentlevel1s: [], departmentlevel2s: [] },
                data: { serviceareas: [], facilities: [], department1s: [], department2s: [] }
            }
        };
        result.recordset.forEach(function (row) {
            parseUser(row, scatterplot.scatterplot.users);
            parseAverage(row, scatterplot.scatterplot.averages);
            parseData(row, scatterplot.scatterplot.data);
        });
        //console.log("done parsing",userArray);
        success(scatterplot);
    }).catch(function (err) {
        // ... error checks        
        error(err);
    });
};
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
;
