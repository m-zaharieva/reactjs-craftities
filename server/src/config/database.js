import mongoose from 'mongoose';


export const db = (connectionString) => {
    return mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};