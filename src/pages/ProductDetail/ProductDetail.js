import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/itemDetail/itemDetail';
import Spinner from '../../components/Spinner/spinner';
import "./productDetail.css";

const ProductDetail = () => {
    const [detalleProducto, setDetalleProducto] = useState({});
    const { detalleId } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const dbQuery = doc(db, "productos", `${detalleId}`)
        getDoc(dbQuery)
        .then(resp => setDetalleProducto({ id: resp.id, ...resp.data()}))
        .catch((err) => console.log(err))
    }, [detalleId]);    

    return (
        <div className='acomodarDetalle'>
            {detalleProducto.id ? <ItemDetail detalleProducto={detalleProducto} /> : <Spinner />}
        </div>
    );
};

export default ProductDetail;