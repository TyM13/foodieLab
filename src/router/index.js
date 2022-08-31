import Vue from 'vue'
import VueRouter from 'vue-router'
import ClientSignUp from "@/views/Client/ClientSignUp"
import LoginPage from "@/views/Client/LoginPage.vue"
import ProfilePage from "@/views/Client/ProfilePage.vue"
import ClientCloseAccount from "@/views/ClientCloseAccount.vue"
import RestaurantSignUp from "@/views/Restaurant/RestaurantSignUp.vue"
Vue.use(VueRouter)

const routes = [{
  path: "/",
  component: LoginPage,
},
{
  path: "/ClientSignUp",
  component: ClientSignUp,
},
{
  path: "/ClientProfilePage",
  component: ProfilePage,
},
{
  path: "/ClientDeleteProfile",
  component: ClientCloseAccount,
},
{
  path: "/RestaurantSignUp",
  component: RestaurantSignUp,
}
]

const router = new VueRouter({
  routes
})

export default router
