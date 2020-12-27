import {library} from '@fortawesome/fontawesome-svg-core'
import {faPlusSquare, faSpinner} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

import Vue from 'vue'
import App from './App.vue'
import './assets/css/style.css'
import router from './router'

library.add(faSpinner)
library.add(faPlusSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
    data: {
        token: undefined,
        user: {
            role: 'admin'
        },
    },
    router,
    render: h => h(App)
}).$mount('#app')
