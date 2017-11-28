import Vue from 'vue';
import Vuex from 'vuex';

import user from './user';
import config from './config';
import modals from './modals';

Vue.use(Vuex);

export default function() {
    return new Vuex.Store({
        modules: {
            user: user(),
            config: config(),
            modals: modals()
        }
    });
}
