import express from 'express';
import cors from 'cors';
import path from 'path';

import { PORT } from './config/constants.js';
import router from './routes.js';
import { db } from './config/database.js';
import { DB_CONNECTION_STRING } from './config/constants.js';

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve('./src/public')))

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(router);

// app.use('/api/*', (req, res) => {
//     res.status(404)
//             .send(JSON.stringify(`Endpoint ${req.method.toUpperCase()} ${req.baseUrl}${req.path.slice(0, -1)} NOT FOUND!`));
// })

// app.use('*', (req, res) => {
//     res.sendFile('./../public/index.html');
// })


db(DB_CONNECTION_STRING)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}...`)
        })
    })
    .catch(error => {
        // TODO Error handler when DB is not connected
    })
