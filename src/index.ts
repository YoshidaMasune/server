import express from 'express'
import { nimone_api } from "./app";
import work_route from './routers/work-route';
import user_route from './routers/user-route';
import monk_route from './routers/monk-route';
import auth_router from './routers/auth-route'
import { RoutesApp } from "./myInterface.interface";

const routes: Array<RoutesApp> = [
    {
        path: '/api/users',
        route: user_route
    },
    {
        path: '/api/workes',
        route: work_route
    },
    {
        path: '/api/monkes',
        route: monk_route
    },
    {
        path: '/api/auth',
        route: auth_router
    }
]

nimone_api(routes, 4000)