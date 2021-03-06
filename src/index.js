import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
Vue.config.productionTip=false


new Vue({
    el:'#root',
    render:h=>h(App),
    beforeCreate(){
        Vue.prototype.$eventBus=this
    },
    store
})
