import { createContext, useContext, useState } from "react"

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    function addItem(producto) {        
        let existe = cartList.some((prod) => prod.name === producto.name)
        if (existe === false) {
            setCartList([...cartList, producto])
        } else {
            let artBuscado = cartList.find((el) => el.name === producto.name)            
            if (producto.quantity <= (producto.stock - artBuscado.quantity)) {
                artBuscado.quantity = artBuscado.quantity + producto.quantity
                artBuscado.subtotal = artBuscado.subtotal + producto.subtotal
            }
        }
    }

    function eliminarItem(id) {
        setCartList(cartList.filter(prod => prod.id !== id))
    }

    function vaciarCarrito() {
        setCartList([])
    }

    function totalCarro(){
        return cartList.map((producto => producto.subtotal)).reduce((acumulador, elemento) => acumulador + elemento, 0)
    }    

    return (
        <CartContext.Provider value={{ cartList, addItem, eliminarItem, vaciarCarrito, totalCarro}}>           
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

/*

const addItem = (item) => {
    setCartItems([...cartItems, item]);
};

*/
