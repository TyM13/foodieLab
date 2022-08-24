import Vue from 'vue'
import VueRouter from 'vue-router'
import ClientSignUp from "@/views/Client/ClientSignUp"
import LoginPage from "@/views/Client/LoginPage.vue"

Vue.use(VueRouter)

const routes = [{
  path: "/",
  component: LoginPage,
},
{
  path: "/SignUp",
  component: ClientSignUp,
}
]

const router = new VueRouter({
  routes
})

export default router
