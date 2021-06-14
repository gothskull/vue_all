export async function fetchCupcakes({ commit }) {
    const data     = await fetch('/data/productos.json')
    const cupcakes = await data.json()
     commit('cupcakes/setCupcakes', cupcakes, {root:true})
}




