import express, { Application, Router, urlencoded } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'

// import Routers
import { RoutesApp } from './myInterface.interface';

export const nimone_api = function (routes: Array<RoutesApp>, port: number) {

  const app = express()
  dotenv.config();

  const MONGO_URI =
    'mongodb+srv://devmonk:devmonk@cluster0.rth3y9d.mongodb.net/?retryWrites=true&w=majority';
  const PORT = port;

  // set middlewares
  app.use(urlencoded({ extended: false }));
  app.use(express.json());
  app.use(cors())

  // set routes

  routes.forEach(route => app.use(route.path, route.route))

  // connect mongoose2
  mongoose
    .connect(MONGO_URI)

    .then(() =>
      app.listen(PORT, () => {
        console.log(`server run at http://localhost:${PORT}`);
      }),
    )
    .catch((err) => {
      console.log(err);
    });
};
