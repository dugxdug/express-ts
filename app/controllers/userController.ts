// Import only what we need from express
import { Router, Request, Response } from 'express';
import * as mssql from 'mssql';

import { UserManager } from '../data/userManager';

// Assign router to the express.Router() instance
const router: Router = Router();

const dbConfig = {
    server: "gnosisstaging-db.cmwgheiciguq.us-east-1.rds.amazonaws.com",
    database: "Datawarehouse",
    user: "sa",
    password: "FQvP(rWdp4pD",
    port: 1433,
    requestTimeout: 30000
};

let _pool = null;
mssql.connect(dbConfig).then(pool => {
    _pool = pool;
}).catch(err => {
    console.log(err);
})

mssql.on('error', err => {
    console.log(err);
})

// The / here corresponds to the route that the UserController
// is mounted on in the server.ts file.
// In this case it's /user
router.get('/', (req: Request, res: Response) => {
    // this.user.getScatterPlotUsers()
    res.send('users controller');

});

// Export the express.Router() instance to be used by server.ts
export const UserController: Router = router;