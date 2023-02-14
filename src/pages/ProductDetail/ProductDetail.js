import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardProduct from "../../components/CardProduct/index";
import { mockedProducts } from "../../components/utils/products";
import { fetchCopy } from "../../components/utils/fetchCopy";

const ProductDetail = () => {
    const [product, setProducts] = useState({});

    let { id } = useParams();

    useEffect(() => {

        fetchCopy(mockedProducts).then((result) => setProducts(result))
    
    }, [id])

    return (
        <div className="CharacterList-detail">
        <div key={product.id}>
            <CardProduct data={product} />
        </div>
        </div>
    );
    };

export default ProductDetail;