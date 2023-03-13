import { useState } from 'react'
import './itemCount.css';

const ItemCount = ({stock, initial, onAdd, addItem, detalleProducto, price}) => {   

    const [count, setCount] = useState(initial);

    const handleClick = () => {
        if (count < stock) {
            onAdd(count + 1);
        }
        if (count === stock - 1) {
            onAdd(count + 1);
            addItem({ ...detalleProducto, quantity: 1, subtotal: price });
        }
    };

    function sumar() {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    function restar() {
        if (count > 1) {
            setCount(count - 1)
        }
    } 

    if(stock > 0){
        return (
            <div>
                <div className='fondoControl'>
                    <button className='control' onClick={restar}>-</button>
                    <span className='display'>{count}</span>
                    <button className='control' onClick={sumar}>+</button>
                </div>          
                <button onClick={handleClick}>Agregar al carrito</button>
            </div>
        );

    }
    
    return(
        <div>
            <h3>No hay Stock de este producto.</h3>
        </div>
    )    
};

export default ItemCount


/* 

const onClick = () => {
        if (quantity < stock) {
            onAdd(quantity + 1);
        }
        if (quantity === stock - 1) {
            onAdd(quantity + 1);
            addItem({ ...detalleProducto, quantity: 1, subtotal: price });
        }
    };

*/