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
        async login(login_info: any) {
            try {
                // update pinia state
                console.log(login_info);
                this.isLoggedIn = login_info.success;
                // console.log(login_info.data.token);
                this.token = login_info.data.token;

                // store user details and jwt in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', JSON.stringify(login_info.data.token));

                // redirect to previous url or default to home page
                // router.push(this.returnUrl || '/');
            } catch (error) {
                // const alertStore = useAlertStore();
                // alertStore.error(error);                
            }
        },
        logout() {
            this.isLoggedIn = false;
            localStorage.removeItem('token');
            // this.$router.push('/login');
        }
    },
});