import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import MapMain from "./components/Map/Main";
import MapList from "./components/Map/List";
import NewMap from "./components/Map/New";
import Map from "./components/Map/View";
import Home from "./components/Home";

export const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/maps',
        component: MapMain,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '/',
                component: MapList
            },
            {
                path: 'new',
                component: NewMap
            },
            {
                path: ':id',
                component: Map
            }
        ]
    }
];
