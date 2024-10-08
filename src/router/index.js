import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue'
import LoginWithFirebaseView from '../views/LoginWithFirebaseView.vue'
import AddBookView from '../views/AddBookView.vue'
import GetBookCountView from '../views/GetBookCountView.vue'
import WeatherView from '../views/WeatherView.vue'
import bookCountApi from '../views/bookCountApi.vue'
import booksApi from '../views/booksApi.vue'
import { ref } from 'vue'

const isAuthenticated = ref(null)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) next({ name: 'Login' })
      else next()
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/firesignup',
    name: 'FirebaseSignup',
    component: FirebaseRegisterView
  },
  {
    path: '/firelogin',
    name: 'FirebaseLogin',
    component: LoginWithFirebaseView
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) next({ name: 'Login' })
      else next()
    }
  },
  {
    path: '/getBookCount',
    name: 'GetBookCount',
    component: GetBookCountView,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) next({ name: 'Login' })
      else next()
    }
  },
  {
    path: '/weather',
    name: 'Weather',
    component: WeatherView
  },
  {
    path:"/api/bookcount",
    component:bookCountApi,
  },
  {
    path:"/api/books",
    component:booksApi,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export { isAuthenticated }
export default router
