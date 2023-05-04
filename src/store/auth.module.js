import AuthService from '../services/auth.service';

const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const initialState = currentUser
    ? {status: {loggedIn: true}, currentUser}
    : {status: {loggedIn: false}, currentUser: null}

export const auth = {
    state: {
        initialState
    },
    actions: {
        login({commit}, loginModel) {
            return AuthService.login(loginModel).then(
                loginModel => {
                    commit('loginSuccess', loginModel);
                    return Promise.resolve(loginModel)
                },
                error => {
                    commit('loginError');
                    return Promise.reject(error)
                }
            );
        },
        logout({commit}) {
            AuthService.logout();
            commit('logoutSuccess');
        },
        register({commit}, registerModel) {
            return AuthService.register(registerModel).then(
                response => {
                    commit('registerSuccess');
                    return Promise.resolve(response.data);
                },
                error => {
                    commit('registerFailure');
                    return Promise.reject(error);
                }
            )
        }
    },
    mutations: {
        loginSuccess(state, loginModel) {
            state.status.loggedIn = true;
            state.currentUser = loginModel
        },
        loginError(state) {
            state.status.loggedIn = false;
            state.currentUser = null
        },
        logoutSuccess(state) {
            state.status.loggedIn = false;
            state.currentUser = null;
        },
        registerSuccess(state) {
            state.status.loggedIn = false;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        }
    },
    getters: {
        getCurrentUser(state) {
            return state.initialState.currentUser;
        },
        getLoggedStatus(state) {
            return state.initialState.status;
        }
    }
}