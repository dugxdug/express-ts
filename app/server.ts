/* server.js */
import * as express from 'express';
import { WelcomeController } from './controllers/welcomeController';
import { UserController } from './controllers/userController';

// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port: number = process.env.PORT || 3000;

// Mount the WelcomeController at the /welcome route
app.use('/welcome', WelcomeController);

app.use('/user', UserController);

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
