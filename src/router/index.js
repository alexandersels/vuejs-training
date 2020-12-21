import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home/Home";
import Sheets from "@/components/Sheets/Sheets";
import CreateSheet from "@/components/Sheets/Create-Sheet";
import Orders from "@/components/Orders/Orders";
import Users from "@/components/Users/Users";
import Units from "@/components/Units/Units";

Vue.use(VueRouter)

const routes = [
    {
        path: '/sheets/create',
        name: 'Create Sheet',
        component: CreateSheet,
    },
    {
        path: '/sheets',
        name: 'Sheets',
        component: Sheets,
    },
    {
        path: '/orders',
        name: 'Orders',
        component: Orders,
    },
    {
        path: '/units',
        name: 'Units',
        component: Units,
    },
    {
        path: '/users',
        name: 'Users',
        component: Users,
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
