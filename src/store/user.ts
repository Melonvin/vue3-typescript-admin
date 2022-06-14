/**
 * @description user store
 * @author lxj 
 * @since 2022/06/14
 */
import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            username: '',
            avatar: ''
        }
    }
});