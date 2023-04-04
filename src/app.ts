import express, { Router, urlencoded } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// import Routers
import work_route from './routers/work-route';
import user_route from './routers/user-route';
import monk_route from './routers/monk-route';

export const nimone_api = function (){

    const app = express();
    dotenv.config();

    const MONGO_URI = 'mongodb+srv://devmonk:devmonk@cluster0.rth3y9d.mongodb.net/?retryWrites=true&w=majority';
    const PORT = 4000;

    // set middlewares
    app.use(urlencoded({ extended: false }));
    app.use(express.json());

    // set routes
    app.use('/api/users', user_route);
    app.use('/api/workes', work_route);
    app.use('/api/monkes', monk_route)
    // app.use('/auth');

    // connect mongoose
    mongoose.connect(MONGO_URI)
        .then(() => app.listen(PORT, () => {
            console.log(`server run at http://localhost:${PORT}`)
        }))
        .catch(err => {
            console.log(err)
        })
}
