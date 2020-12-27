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
import Users from "@/components/Users/Users";
import DetailUser from "@/components/Users/Detail-User";
import EditUser from "@/components/Users/Edit-User";

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
    {path: '/users', component: Users},
    {path: '/users/:id', component: DetailUser},
    {path: '/users/:id/edit', component: EditUser},
    {path: '/', component: Home},
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
