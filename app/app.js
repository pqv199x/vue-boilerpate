import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuex from 'vuex'
import Toasted from 'vue-toasted'

// import routes from './routes'
import Home from './components/Home.vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Toasted, {
    position: 'bottom-right',
    theme: 'bubble',
    duration: 4000,
    action : {
        text : 'Dismiss',
        onClick : (e, toastObject) => {
            toastObject.goAway(0)
        }
    },
    singleton: true
})

const store = new Vuex.Store({
    state: {
    }
})

const EventBus = new Vue()

Vue.prototype.$bus = EventBus

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home }
    ]
})

new Vue({ // eslint-disable-line no-new
    el: '#app',
    store,
    router: router,
    components: { App },
    template: '<App/>'
})
