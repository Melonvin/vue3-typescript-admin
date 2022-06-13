import router from '@/router'
import { useAuthStore } from './store/auth';



router.beforeEach((to, from) => {
    const store = useAuthStore();
    const isAuthenticated: boolean = !!store.token;

    if (!isAuthenticated && to.name !== 'Login') {
        return { name: 'Login' };
    }
});


