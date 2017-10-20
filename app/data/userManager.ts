import * as _ from 'underscore';

const getScatterPlotUsers = (req, pool, success, error) => {
    
        let query = constructQuery(req);
    
        pool.request().query(query).then(result => {
            //.input('input_parameter', sql.Int, value)
            //console.dir(result.recordset.length);
            var scatterplot = {
                scatterplot: {
                    users: [],
                    averages: { organizations: [], serviceareas: [], facilities: [], departmentlevel1s: [], departmentlevel2s: [] },
                    data: {serviceareas:[], facilities:[], department1s:[], department2s:[]}
                }
            };
            result.recordset.forEach((row) => {
                parseUser(row, scatterplot.scatterplot.users);
                parseAverage(row, scatterplot.scatterplot.averages);
                parseData(row,scatterplot.scatterplot.data);
            });
            //console.log("done parsing",userArray);
            success(scatterplot);
        }).catch(err => {
            // ... error checks        
            error(err);
        });
    
    }

    export class UserManager { };