export function valorTotal( state ) {
    return state.cart.reduce((sum, producto) => {
        return (parseFloat( producto.precio ) * producto.qty) + sum
    }, 0)
}

