import { defineStore } from "pinia";

export const useAuthStore = defineStore('user', {
    state: () => {
        return {
            token: ''
        }
    }
})