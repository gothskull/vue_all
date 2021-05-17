import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

import productos from '@/modules/productos/'
import cart from '@/modules/cart/'


export default new Vuex.Store({
  modules: {
    productos,
    cart
  }
})
