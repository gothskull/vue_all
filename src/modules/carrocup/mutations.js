import {find} from 'lodash'

export function addCupcakeToCart(state, cupcake) {
    const cupcakeInCart = find(state.carroCup, {id: cupcake.id})
    if(!cupcakeInCart)
    {
        const copy = Object.assign({},cupcake)
        copy.cant = 1
        state.carroCup.push(copy) 
    } else {
        cupcakeInCart.cant += 1
    }
}

export function removeCupcakeFromCart(state, id) {
    
}