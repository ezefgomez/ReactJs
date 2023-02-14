import React, { useEffect, useState } from "react";
import CardProduct from "../CardProduct/index";
import { Link } from "react-router-dom";
import { mockedProducts } from "../utils/products";
import { fetchCopy } from "../utils/fetchCopy";

const CategoryList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetchCopy(mockedProducts).then((result) => setProducts(result))
    
    }, [])

    return (
        <div>
        {products.map((prod) => {
            return (
            <Link to={`/detail/${prod.category}`}>
                <CardProduct key={prod.category} data={prod} />
            </Link>
            );
        })}
        </div>
    );
};

export default CategoryList;