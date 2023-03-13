import React from 'react'
import { BiCart } from "react-icons/bi";
import { Link } from 'react-router-dom';
import './CartWidget.css';
import { useCartContext } from '../../Cart/cartContext'


function CartWidget() {

    const { cartList } = useCartContext()

    if (!cartList || !cartList.length) {

        return (
            <div>
            <Link to="/carrito"><h1><BiCart className='simboloCarrito' /></h1></Link>
            </div>
        )
    }

    return (
        <div className='carrito'>
            <span className='circulo'>{(cartList.map((producto => producto.quantity))).reduce((acumulador, elemento) => acumulador + elemento, 0)}</span>
            <Link to="/carrito"><h1><BiCart className='simboloCarrito' /></h1></Link>
        </div>
        )
}

export default CartWidget
