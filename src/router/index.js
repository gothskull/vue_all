import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  // GOVER
  {path: '/grover',name: 'Grover',component: () => import(/* webpackChunkName: "grover" */ '../views/Grover/Grover.vue')},
  {path: '/grover/componentes',name: 'Grover',component: () => import(/* webpackChunkName: "grover" */ '../views/Grover/Componentes.vue')},
  {path: '/grover/notas-app',name: 'Form-Grover',component: () => import(/* webpackChunkName: "notas-app" */ '../views/Grover/NotasApp.vue')},
  {path: '/grover/compras',name: 'Compras',component: () => import(/* webpackChunkName: "compras" */ '../views/Grover/Compras.vue')},
  {path: '/grover/tienda', name: 'Tienda', component: () => import(/*webpackChunkName: "Tienda" */ '../views/Grover/Tienda.vue')},
  {path: '/grover/productos/:id', name:'Producto', component: () => import(/*webpackChunkName:"Productos" */ '../views/Grover/Productos.vue')},
  // BLUWEB
  {path: '/blue', name: 'Blue',component: () => import(/* webpackChunkName: "blue" */ '../views/BluWeb/Blue.vue')},
  //PARRA
  {path: '/parra/tienda', name: 'PTienda',component: () => import(/* webpackChunkName: "ptienda" */ '../views/Parra/Tienda.vue')},
  // CIFUENTES
  {path: '/jcifuentes/slots', name: 'PTienda',component: () => import(/* webpackChunkName: "ptienda" */ '../views/JCifuentes/Slots.vue')},
  {path: '/jcifuentes/componentes', name: 'PTienda',component: () => import(/* webpackChunkName: "ptienda" */ '../views/JCifuentes/ComponentesDinamicos.vue')},
  //VARIOS
  {path: '/varios/formularios', name: 'varFormularios', component: () => import(/* webpackChunkName: "varFormularios" */ '../views/Varios/forms/Formularios.vue')},
  {path: '/varios/vuelidate', name: 'varFormularios', component: () => import(/* webpackChunkName: "varvuelidate" */ '../views/Varios/forms/Vuelidate.vue')},
  //PRACICAS
  {path: '/practicas/tiendaParra', name: 'PracticasParraTienda', component: () => import(/* webpackChunkName: "practicasTiendaParra" */ '../views/Practicas/TiendaParra.vue')}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
