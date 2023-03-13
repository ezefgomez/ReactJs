import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
import "./ItemListContainer.css";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"

function ItemListContainer({ greeting }) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoriaId } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, "productos")
        if (categoriaId) {
        const queryCollectionFilter = query(queryCollection, where("categoria", "==", `${categoriaId}`))
        getDocs(queryCollectionFilter)
            .then(resp => setProductos(resp.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
        } else {
        const queryCollection = collection(db, "productos")
        getDocs(queryCollection)
            .then(resp => setProductos(resp.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
        }
    }, [categoriaId])

    return (
        <div className='fondo'>
        <div>
            <p className='parrafo'>{greeting}</p>
        </div>
        <div className='control'>
            {loading ? <Loader /> : productos.map((prod => <div key={prod.id}>{<ItemList prod={prod} />}</div>))}
        </div>
        </div>
    )
}

export default ItemListContainer