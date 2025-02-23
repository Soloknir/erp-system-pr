import { createRouter, createWebHistory } from 'vue-router'
import { storeToRefs } from 'pinia'

import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import AccountsView from '@/views/AccountsView.vue'

import { useAuthStore } from '@/stores/auth.store'
import { RoutesIds } from '@/enums/router'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: RoutesIds.HOME,
      component: HomeView,
    },
    {
      path: '/auth',
      name: RoutesIds.AUTH,
      meta: { transition: 'slide-left' },
      component: AuthView
    },
    {
      path: '/accounts',
      name: RoutesIds.ACCOUNTS,
      meta: { transition: 'slide-right' },
      component: AccountsView
    }
  ],
})

router.beforeEach((to, _from, next) => {
  const { isAuthenticated, savedAccounts } = storeToRefs(useAuthStore());

  if (![RoutesIds.ACCOUNTS, RoutesIds.AUTH].includes(to.name as RoutesIds) && !isAuthenticated.value) {
    next({ name: savedAccounts.value ? RoutesIds.ACCOUNTS : RoutesIds.AUTH });
  } else if (to.name === RoutesIds.ACCOUNTS && !savedAccounts.value.length) {
    next({ name: RoutesIds.AUTH })
  } else {
    next();
  }
});

export default router
