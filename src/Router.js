import { createWebHistory, createRouter } from "vue-router";
import DepartamentosComponet from "./components/DepartamentosComponet.vue";
import CreateDepartamento from "./components/CreateDepartamento.vue";
import DetailsDepartamento from "./components/DetailsDepartamento.vue";
import UpdateDepartamento from "./components/UpdateDepartamento.vue";
import DeleteDepartamento from "./components/DeleteDepartamento.vue";

const myRoutes = [
    {
        path: '/', component: DepartamentosComponet
    },
    {
        path: '/create', component: CreateDepartamento
    },
    {
        path: '/details/:id/:nombre/:localidad', component: DetailsDepartamento
    },
    {
        path: '/update/:id', component: UpdateDepartamento
    },
    {
        path: '/delete/:id', component: DeleteDepartamento
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;