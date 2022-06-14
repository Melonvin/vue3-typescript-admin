import router from '@/router'
import { useAuthStore } from './store/auth';



router.beforeEach((to) => {
    const store = useAuthStore();
    const isAuthenticated = !!store.token;

    if (!isAuthenticated && to.name !== "Login") {
        return { name: 'Login' };
    }
});


