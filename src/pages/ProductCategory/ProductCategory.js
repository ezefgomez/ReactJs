import React, { useState, useEffect  } from "react";
import CardProduct from "../../components/CardProduct/index";
import Spinner1 from "../../components/Spinner/spinner";

// FIRBASE - FIRESTORE
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";

// REACT ROUTER DOM
import { useParams } from "react-router-dom";

const ProductCategory = () => {

    const [ProductsByCategory, setProductsByCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { category } = useParams();

    useEffect(() => {
        setIsLoading(true);
        const getProducts = async () => {
        const q = query(collection(db, "productos"), where("category", "==", category));
        const docs = [];
        const querySnapshot = await getDocs(q);
        // console.log('DATA:', querySnapshot);
        querySnapshot.forEach((doc) => {
            // console.log('DATA:', doc.data(), 'ID:', doc.id);
            docs.push({ ...doc.data(), id: doc.id });
        });
        // console.log(docs);
        setProductsByCategory(docs);
        };
        getProducts();
        setTimeout(() => {
        setIsLoading(false);
        }, 1000);
    }, [category]);

    return (
        <div
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
        {isLoading ? (
            <div className="Spinner">
            <Spinner1 />
            </div>
        ) : (
            ProductsByCategory.map((data) => {
            return <CardProduct productsdata={data} key={data.id} />;
            })
        )}
        </div>
    );
};

export default ProductCategory;