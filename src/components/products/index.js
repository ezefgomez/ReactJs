import React from "react";

const Product = ({ id, category, name, description, stock, price}) => {
    return(
        <div>
            <p>{id}</p>
            <p>{category}</p>
            <p>{name}</p>
            <p>{description}</p>
            <p>{stock}</p>
            <p>{price}</p>
        </div>
    )
}

export default Product