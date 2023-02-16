import React from "react";

const Product = ({ id, category, img, name, description, stock, price}) => {
    return(
        <div>
            <p>{id}</p>
            <p>{category}</p>
            <p>{img}</p>
            <p>{name}</p>
            <p>{description}</p>
            <p>{stock}</p>
            <p>{price}</p>
        </div>
    )
}

export default Product