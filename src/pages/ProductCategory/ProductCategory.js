import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardProduct from "../../components/CardProduct/index";
import { mockedProducts } from "../../components/utils/products";
import { fetchCopy } from "../../components/utils/fetchCopy";

const ProductCategory = () => {
    const [product, setProducts] = useState({});

    let { category } = useParams();

    useEffect(() => {

        fetchCopy(mockedProducts).then((result) => setProducts(result))
    
    }, [category])

    return (
        <div className="CharacterList-detail">
        <div key={product.category}>
            <CardProduct data={product} />
        </div>
        </div>
    );
    };

export default ProductCategory;