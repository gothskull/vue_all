export async function fetchProductos({ commit }) {
   const data      = await fetch('/data/productos.json') 
   const productos = await data.json()
   commit('productos/setProductos', productos, { root:true })
}