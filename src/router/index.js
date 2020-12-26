import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home/Home";
import Sheets from "@/components/Sheets/Sheets";
import CreateSheet from "@/components/Sheets/Create-Sheet";
import DetailSheet from "@/components/Sheets/Detail-Sheet";
import Orders from "@/components/Orders/Orders";
import CreateUser from "@/components/Users/Create-User";
import Units from "@/components/Units/Units";
import Login from "@/components/Authentication/Login";
import Logout from "@/components/Authentication/Logout";

Vue.use(VueRouter)

const routes = [
    {path: '/sheets/create', component: CreateSheet},
    {path: '/sheets/:id', component: DetailSheet},
    {path: '/sheets', component: Sheets},
    {path: '/orders', component: Orders},
    {path: '/units', component: Units},
    {path: '/register', component: CreateUser},
    {path: '/login', component: Login},
    {path: '/logout', component: Logout},
    {path: '/', component: Home},
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router