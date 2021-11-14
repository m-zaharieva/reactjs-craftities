import express from 'express';
import cors from 'cors';

import { PORT } from './config/constants.js';
import router from './routes.js';
import { db } from './config/database.js';
import { DB_CONNECTION_STRING } from './config/constants.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);



db(DB_CONNECTION_STRING)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Application is running on http://localhost:${PORT}...`)
        })
    })
    .catch(error => {
        // TODO Error handler when DB is not connected
    })
