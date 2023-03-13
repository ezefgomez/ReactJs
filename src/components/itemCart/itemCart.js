import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Cart/cartContext'
import "./itemCart.css";

const ItemCart = () => {
    const { cartList, eliminarItem, vaciarCarrito, totalCarro } = useCartContext()
    return (
        <div>
        <div>
            <h2 className="tituloCarro">Carrito de Compras.</h2>
        </div>
        <div>
            <table className="table" border="1" cellpading="0" cellSpacing="0">
            <tbody>
                <tr>
                <th className='celdaIndividual'>CODIGO</th>
                <th className='celdaIndividual'>DESCRIPCION</th>
                <th className='celdaIndividual'>CANTIDAD</th>
                <th className='celdaIndividual'>PRECIO</th>
                <th className='celdaIndividual'>SUBTOTAL</th>
                <th className='celdaIndividual'>TOTAL</th>
                </tr>
            </tbody>
            </table>
            {cartList.map(producto => <table key={producto.id} className="table1" border="1" cellpading="0" cellSpacing="0">
            <tbody>
                <tr>
                <td className='celdaIndividualCodigo'> {producto.id}</td>
                <td className='celdaIndividual'> {producto.name}</td>
                <td className='celdaIndividual'> {producto.quantity}</td>
                <td className='celdaIndividual'> ${producto.price}</td>
                <td className='celdaIndividual'> ${producto.subtotal}</td>
                <td className='celdaIndividual'><button onClick={() => { eliminarItem(producto.id) }}>X</button></td>
                </tr>
            </tbody>
            </table>
            )}
        </div>
        <div>
            <br></br>
            <span className='letraTotal'>Total $ {totalCarro()}</span>
            <br></br>
            <br></br>
            <Link to="/"><Button>Seguir Comprando</Button></Link>
            <br></br>
            <br></br>
            <button onClick={() => { vaciarCarrito() }}>Vaciar Carrito</button>
        </div>
        </div>
    )
}

export default ItemCart