// Import everything from express and assign it to the express variable
import * as express from 'express';
import * as Sequelize from 'sequelize';

// Import WelcomeController from controllers entry point
import { WelcomeController } from './controllers';

// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port: number = process.env.PORT || 3000;

// Mount the WelcomeController at the /welcome route
app.use('/welcome', WelcomeController);

// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
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
