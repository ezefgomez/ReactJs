import Card from 'react-bootstrap/Card';
import carrito from "../../public/Images/carrito.png";
import "./style.css"

function CartWidget() {
    return (
        <Card style={{ width: '50px' }}>
        <div className="navbar-nav" style={{color: "white", width: "200px"}}>
            <button style={{backgroundColor:"white"}}><img src={carrito} alt="" style={{width: "30px", height: "25px"}} /></button>
        </div>
        <Card.Body className="text-muted text-center">
            <Card.Title className='title'> 1 </Card.Title>
        </Card.Body>
        </Card>
    );
}

export default CartWidget;