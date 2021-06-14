import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

import productos from '@/modules/productos/'
import cart from '@/modules/cart/'
import cupcakes from '@/modules/cupcakes/'
import carrocup from '@/modules/carrocup/'


export default new Vuex.Store({
  modules: {
    productos,
    cart,
    cupcakes,
    carrocup
  }
})
