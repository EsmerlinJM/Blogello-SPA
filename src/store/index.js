import Vue from 'vue'
import Vuex from 'Vuex'
import services from './services'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        token: localStorage.getItem('token'),
        services: services 
    },
    getters: {
        loggedIn(state) {
            return state.token !== null
        }
    }
})