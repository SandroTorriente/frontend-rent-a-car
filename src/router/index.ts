import RoleView from "@/views/RoleView.vue";
import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/roles",
        name: "Roles",
        component: RoleView,
    },


];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;