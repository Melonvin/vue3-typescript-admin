import router from '@/router'
import { useUserStore } from './store/user'

router.beforeEach(to => {
  const store = useUserStore()
  const isAuthenticated = !!store.token

  if (!isAuthenticated && to.name !== 'Login') {
    return { name: 'Login' }
  }
})
