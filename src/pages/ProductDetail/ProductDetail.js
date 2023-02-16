/*
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardProduct from "../../components/CardProduct/index";
import { mockedProducts } from "../../components/utils/products";
import { fetchCopy } from "../../components/utils/fetchCopy";

const ProductDetail = () => {
    const [product, setProducts] = useState({});

    let { id } = useParams();

    useEffect(() => {
        fetchCopy(mockedProducts, id)
            .then((result) => setProducts(result))
            .catch((error) => console.error(error));
    }, [id]);

    return (
        <div className="CharacterList-detail">
            {product.id ? <div key={product.id}> <CardProduct data={product} /> </div> : <p>Cargando producto...</p>}
        </div>
    );
    };

export default ProductDetail;

*/

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardProduct from "../../components/CardProduct/index";
import { mockedProducts } from "../../components/utils/products";

const ProductDetail = () => {
    const [product, setProduct] = useState({});
    let { id } = useParams();

    useEffect(() => {
        const foundProduct = mockedProducts.find((p) => p.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
        }
    }, [id]);

    return (
        <div className="CharacterList-detail">
            {product.id ? (
                <div key={product.id}>
                    <CardProduct data={product} />
                </div>
            ) : (
                <p>Cargando producto...</p>
            )}
        </div>
    );
};

export default ProductDetail;