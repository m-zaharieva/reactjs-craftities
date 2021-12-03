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
app.use(router);



db(DB_CONNECTION_STRING)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}...`)
        })
    })
    .catch(error => {
        // TODO Error handler when DB is not connected
    })
