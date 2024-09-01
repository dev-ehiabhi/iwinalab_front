import { defineStore } from "pinia";

export const useLoginStore = defineStore('login', {    
    state: () => ({
        isLoggedIn: false,
        token: ''
    }),
    getters: {
        getIsLoggedIn: (state) => state.isLoggedIn,
    },
    actions: {
        async login(credentials: any) {
            try {
                // update pinia state
                console.log(credentials);
                this.isLoggedIn = credentials.email;
                // console.log(credentials.data.token);
                this.token = credentials.password;

                // store user details and jwt in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', JSON.stringify(credentials.password));

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