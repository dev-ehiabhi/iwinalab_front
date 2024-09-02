import { defineStore } from "pinia";
import AuthApis from '@/services/apis/AuthApis'

const api = AuthApis;

interface State {
    isLoggedIn: boolean
    isRegistered: boolean
    token: string | null
    user: Object
}

export const useLoginStore = defineStore('useLoginStore', {    
    state: (): State => ({    
        isLoggedIn: false,
        isRegistered: false,
        token: '',
        user: {}
    }),
    getters: {
        getIsLoggedIn: (state) => state.isLoggedIn,
        getIsRegistered: (state) => state.isRegistered,
        getToken: (state) => state.token,
        setUser: (state) => state.user
    },
    actions: {
        async registerUser(credentials: any) {
            try {
                const response = await api.registerUser(credentials)
                this.isRegistered = response.data.success
                // this.user = response.data.data.user
                // showTooltip(`Welcome back ${this.userData.name}!`)
            } catch (error) {
                // showTooltip(error)
                // let the form component display the error
                return error
            }
        },

        async loginUser(credentials: any) {
            try {
                const response = await api.loginUser(credentials)
                this.isLoggedIn = response.data.success
                this.token = response.data.data.token
                this.user = response.data.data.user
                // showTooltip(`Welcome back ${this.userData.name}!`)
            } catch (error) {
                // showTooltip(error)
                // let the form component display the error
                return error
            }
        },


    },
    
});