import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import menu from './modules/menu'
let store = new Vuex.Store({
    state: {
        iscollapse: false

    },
    mutations: {
        TOGGLE(state) {
            state.iscollapse = !state.iscollapse
        }


    },
    modules: {
        menu,
    }
})
export default store;