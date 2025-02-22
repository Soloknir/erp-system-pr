import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import AccountsView from '@/views/AccountsView.vue'

import { useAuthStore } from '@/stores/auth.store'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/auth',
      name: 'Auth',
      meta: { transition: 'slide-left' },
      component: AuthView
    },
    {
      path: '/accounts',
      name: 'Accounts',
      meta: { transition: 'slide-right' },
      component: AccountsView
    }
  ],
})

router.beforeEach((to, from, next) => {
  const { isAuthenticated } = useAuthStore();
  if (!['Accounts', 'Auth'].includes(to.name) && !isAuthenticated) next({ name: 'Auth' })
  else next()
})

export default router
