import { defineStore } from "pinia";

export const useLoginStore = defineStore('LoginStore', {    
    state: () => ({
        isLoggedIn: false,
        token: ''
    }),
    getters: {
        loggedInStatus: (state) => !!state.isLoggedIn,
    },
    actions: {
        async loginUser() {
            // const user = await userService.fetchUser();
            // this.user = {name: 'yuyuy'}
        },
    },
});