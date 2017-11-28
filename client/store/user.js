import api from '../api/';

export default function() {
    return {
        state: {
            user: {}
        },
        getters: {
            isAuth(state) {
                return !!Object.keys(state.user).length;
            }
        },
        mutations: {
            SET_USER(state, user) {
                state.user = Object.assign({}, user);
            },
            REMOVE_USER(state) {
                state.user = {};
            }
        },
        actions: {
            FETCH_USER({commit}, {slug}) {
                return api({
                    path: 'GET_user-$userID',
                    params: { userID: slug }
                }).then(user => commit('SET_USER', user));
            },
            SIGN_IN({commit}, {name, password}) {
                return api({
                    path: 'POST_signin',
                    data: {
                        name: name,
                        password: password
                    }
                }).then(user => commit('SET_USER', user));
            },
            MODIFY_USER({commit, state}, {data, config}) {
                return api({
                    path: 'PATCH_user-$userID',
                    params: { userID: state.user.slug },
                    data,
                    config
                }).then(user => {
                    commit('SET_USER', user);
                });
            },
            SIGN_OUT({commit}) {
                return api({
                    path: 'POST_signout'
                }).then(() => commit('REMOVE_USER'));
            },
            SIGN_UP({dispatch}, {name, password, passwordConfirm}) {
                return api({
                    path: 'POST_user',
                    data: {
                        name: name,
                        password: password,
                        passwordConfirm: passwordConfirm
                    }
                }).then(() => dispatch('SIGN_IN', {name, password}));
            }
        }
    };
}
