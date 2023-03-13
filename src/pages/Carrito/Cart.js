import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Cart/cartContext'
import Formulario from '../Login/formulario';
import ItemCart from '../../components/itemCart/itemCart';
import "./cart.css";

const Carrito = () => {

    const { cartList } = useCartContext()

    if (!cartList || !cartList.length) {

        return (
        <div className='carritoVacio'>
            <h2>Your cart is empty</h2>
        </div>,
        <br></br>,
        <Link to="/"><Button>Volver al catalogo</Button></Link>
        );
    }

    return (
        <div>
        <h2>Cart</h2>
        {cartList.map((item) => (
            <ItemCart key={item.id} item={item} />
        ))}
        </div>,
        <br></br>,
        <div>
        <Formulario />
        </div>
    );
};

export default Carrito

/*

if (!cartList || !cartList.length) {

        return (
        <div className='carritoVacio'>
            <h2>Your cart is empty</h2>
        </div>
        <br></br>
        <Link to="/"><Button>Volver al catalogo</Button></Link>
        );
    }

    return (
        <div>
        <h2>Cart</h2>
        {cartList.map((item) => (
            <ItemCart key={item.id} item={item} />
        ))}
        </div>
        <br></br>
        <Formulario />
    );
};


*/