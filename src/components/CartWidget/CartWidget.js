import Card from 'react-bootstrap/Card';
import carrito from "../../Images/carrito.png";
import "./style.css"
import { useEffect, useState } from 'react';

function CartWidget() {

    const [ count, setCount ] = useState(0)

    useEffect (() => {

        // Hacer llamadas API

        console.log("acciones dentro de useEffect")

        return () => {
            //Cleanup, limpieza
        }
    
    }, [])

    return (
        <Card style={{ width: '50px' }}>
        <div className="navbar-nav" style={{color: "white", width: "200px"}}>
            <button onClick={() => setCount(count + 1)} style={{backgroundColor:"white"}}><img src={carrito} alt="" style={{width: "30px", height: "25px"}} /></button>
        </div>
        <Card.Body className="text-muted text-center">
            <Card.Title className='title'> {count} </Card.Title>
        </Card.Body>
        </Card>
    );
}

export default CartWidget;