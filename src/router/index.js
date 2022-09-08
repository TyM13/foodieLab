import Vue from 'vue'
import VueRouter from 'vue-router'
import ClientSignUp from "@/views/Client/ClientSignUp"
import LoginPage from "@/views/Client/LoginPage.vue"
import ProfilePage from "@/views/Client/ProfilePage.vue"
import ClientCloseAccount from "@/views/Client/ClientCloseAccount.vue"
import RestaurantSignUp from "@/views/Restaurant/RestaurantSignUp.vue"
import RestaurantLogin from "@/views/Restaurant/RestaurantLogin.vue"
import RestaurantProfile from "@/views/Restaurant/RestaurantProfile"
import RestaurantDeleteAccount from "@/views/Restaurant/RestaurantDeleteAccount.vue"
import DiscoverRestaurantsPage from "@/views/General/DiscoverRestaurantsPage.vue"
import RestaurantPublicPage from "@/views/General/RestaurantPublicPage.vue"
import RestaurantCreateMenu from "@/views/Restaurant/RestaurantCreateMenu.vue"
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
},
{
  path: "/RestaurantLogin",
  component: RestaurantLogin,
},
{
  path: "/RestaurantProfilePage",
  component: RestaurantProfile,
},
{
  path: "/RestaurantDeleteAccount",
  component: RestaurantDeleteAccount,
},
{
  path: "/FindRestaurants",
  component: DiscoverRestaurantsPage,
},
{
  path: "/RestaurantPage",
  component: RestaurantPublicPage,
},
{
  path: "/RestaurantCreateMenu",
  component: RestaurantCreateMenu,
},

]

const router = new VueRouter({
  routes
})

export default router
