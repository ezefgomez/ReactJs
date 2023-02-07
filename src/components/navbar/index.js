import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../public/Images/PapabearLogo.png"
import CartWidget from '../CartWidget/CartWidget';


function navbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <div className="navbar-nav" style={{color: "white", width: "120px"}}>
                <button style={{backgroundColor:"white"}}><img src={logo} alt="" style={{width: "100px", height: "60px"}} /></button>
            </div>
            <Navbar.Brand href="#home">PAPABEAR SUPPY ULTD.</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#features"> Productos </Nav.Link>
                <Nav.Link href="#pricing"> Promociones </Nav.Link>
                <NavDropdown title="Contacto" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Consultas privadas</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Encontranos en el mapa</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Llamanos</NavDropdown.Item>
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
        </Container>
        <button>
            <CartWidget />
        </button>
        </Navbar>
    );
}

export default navbar;