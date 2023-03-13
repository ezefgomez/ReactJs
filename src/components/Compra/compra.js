import { useCartContext } from '../../Cart/cartContext'
import { getFirestore, collection, addDoc, updateDoc, doc } from "firebase/firestore"
import { Button } from 'react-bootstrap'
import Swal from "sweetalert2"
import "./compra.css";

const Compra = ({ dataForm }) => {  

    const { cartList, vaciarCarrito, totalCarro } = useCartContext()

    function OrdenCompra() {

        const db = getFirestore()

        cartList.forEach((art) => {
        const queryItem = doc(db, "articulos", `${art.id}`)
        updateDoc(queryItem, { stock: (art.stock - art.cantidad) })
        })

        let orden = {}

        //datos comprador
        orden.buyer = { nombre: `${dataForm.nombre}`, phone: `${dataForm.phone}`, email: `${dataForm.email} ` }    

        //productos del carro
        orden.items = cartList.map(cartItem => {
        const id = cartItem.id
        const name = cartItem.name
        const quantity = cartItem.quantity
        const price = cartItem.price
        const subtotal = cartItem.subtotal
        
        return { id, name, quantity, price, subtotal }
        })

        //Total del Carro.
        orden.total = totalCarro()

        //grabar orden de compra en firebase
        const queryCollection = collection(db, "pedidos")
        addDoc(queryCollection, orden)
        .then(resp => {
            Swal.fire({
            title: `Tu compra fue realizada con exito.`,                    
            width: 600,
            confirmButtonText: "Aceptar",
        });        
            vaciarCarrito()
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
        <Button className='botonOrdenCompra' onClick={() => OrdenCompra()}>Confirmar Pedido</Button>
        </div>
    )
    }

export default Compra