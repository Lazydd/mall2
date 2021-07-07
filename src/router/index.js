import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Login = () => import('../components/Login.vue')
const Home = () => import('../components/Home.vue')
const WelCome = () => import('../components/WelCome.vue')
const User = () => import('../components/user/Users.vue')
const routes = [{
  path: '',
  redirect: '/login'
}, {
  path: '/login',
  component: Login
}, {
  path: '/home',
  component: Home,
  redirect: '/welcome',
  children: [
    {
      path: '/welcome',
      component: WelCome
    },
    {
      path: '/users',
      component: User
    }, {
      path: '/roles'
    }
  ]
}]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
