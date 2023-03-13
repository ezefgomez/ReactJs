import React, { useState } from 'react';
import { useCartContext } from '../../Cart/cartContext';
import InputCount from '../inputCount/inputCount';
import ItemCount from '../itemCount/itemCount';
import "./itemDetail.css";

const ItemDetail = ({ detalleProducto }) => {

    console.log(detalleProducto)

    const { id, category, name, description, stock, price, img } = detalleProducto;  
    const [inputType, SetInputType] = useState("button")
    const { addItem } = useCartContext()

    const onAdd = (quantity) => {
        let subtotal = price * quantity    
        SetInputType("input")
        addItem({ ...detalleProducto, quantity, subtotal })
    }

    return (
        <div className='itemDetail'  >
        <img src={img} alt={description} />
        <div>
            <h3 className='sacar'>{name}</h3>
            <p>Codigo: {id}</p>
            <p>{description}</p>
            <p>Stock: {stock}</p>
            <h3 className='sacar'>${price}</h3>
            <p>Categoria: {category}.</p>        
            {inputType === "button" ? <ItemCount initial={1} stock={stock} onAdd={onAdd} /> : <InputCount/>}
        </div>
        </div>
    );
};

export default ItemDetail;