import React, { useState } from "react";
import { mockedProducts } from "../../components/utils/products";
import CardProduct from "../../components/CardProduct/index";

const ProductCategory = () => {

    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    const filterProductsByCategory = (category) => {
        setSelectedCategory(category);
        const filteredProducts = mockedProducts.filter((product) => product.category === category);
        setProducts(filteredProducts);
    };

    return (
        <div>
            <div>
                <button onClick={() => filterProductsByCategory("vestimenta")}>Vestimenta</button>
                <button onClick={() => filterProductsByCategory("accesorio")}>Accesorios</button>
                <button onClick={() => filterProductsByCategory("medicinales")}>Medicinales</button>
            </div>
            <div>
                {selectedCategory !== "" && <p>{selectedCategory}</p>}
                {products.length > 0 ? (
                products.map((product) => <CardProduct data={product} key={product.id} />)
                ) : (
                <p>No hay productos disponibles para la categoría seleccionada</p>
                )}
            </div>
        </div>
    );

}

export default ProductCategory;