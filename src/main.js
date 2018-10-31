// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'Vuex'
import Vuetify from 'vuetify'
import store from './store'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(Vuex);

Event = new Vue;

Vue.config.productionTip = false

//configurando la auntenticacion en la ruta 
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.loggedIn) {
      next({
        path: "/login", //este es el path al que se va a redireccionar
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
