import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../Images/PapabearLogo.png"
// import { useSelector } from 'react-redux';
// import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidtget';


function Barra() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <div className="navbar-nav" style={{color: "white", width: "120px"}}>
                <button style={{backgroundColor:"white"}}><img src={logo} alt="" style={{width: "100px", height: "60px"}} /></button>
            </div>
            <Navbar.Brand href="/">PAPABEAR SUPPY ULTD.</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <NavDropdown title="Productos" id="collasible-nav-dropdown">
                    <Link to="/category/vestimenta">
                        Vestimenta
                    </Link>
                    <NavDropdown.Divider />
                    <Link to="/category/accesorio">
                        Accesorios
                    </Link>
                    <NavDropdown.Divider />
                    <Link to="/category/medicinales">
                        Productos medicinales
                    </Link>
                </NavDropdown>
            </Nav>
            <Nav>
                <NavDropdown title="Nuestras redes" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Facebook</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Instagram</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Pinterest</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
            <Nav.Link href="/carrito">
                <CartWidget />
            </Nav.Link>
        </Container>
        </Navbar>
    );
}

export default Barra;

/*
    const cart = useSelector((state) => state.cart);
    const cartCount = cart.length;




<FaShoppingCart style={{ fontSize: '2em', backgroundColor: 'white' }} />
    {cartCount > 0 && <span className="badge">{cartCount}</span>}

*/