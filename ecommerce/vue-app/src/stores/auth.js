import {defineStore} from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null
    }),
    getters: {
        isAuthenticated: (state) => !!state.user
    },
    actions: {
        setUser(user){
            this.user = user
        },
        logout(){
            this.user = null
            localStorage.removeItem('token')
        }
    }

})