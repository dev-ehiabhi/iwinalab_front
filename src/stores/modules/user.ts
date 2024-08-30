import { defineStore } from "pinia";

export const useUserStore = defineStore('UserStore', {    
    state: () => ({
        user: {},
    }),
    getters: {
        isLoggedIn: (state) => !!state.user,
    },
    actions: {
        async fetchUser() {
            // const user = await userService.fetchUser();
            // this.user = {name: 'yuyuy'}
        },
    },
});