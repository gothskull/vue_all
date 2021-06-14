import {find,filter} from 'lodash'


export function agregarProducto( state, producto) {
    const prodInCart = find(state.cart, { id: producto.id })
    if( ! prodInCart) 
    {
        const copy = Object.assign({}, producto)
        copy.qty = 1
        state.cart.push(copy)
    } else {
        prodInCart.qty += 1
    }
}

export function removerProductoDeCarro( state, producto ) {
    state.cart = filter( state.cart, ({id}) => id !== producto.id)
}

