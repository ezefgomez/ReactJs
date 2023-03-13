import React from 'react'
import CardProduct from '../CardProduct/index';
import "./itemList.css";

function ItemList({prod}) {

    return (
        <div className='ordenCards'>           
            <CardProduct prod={prod}/>
        </div>
    )
}

export default ItemList