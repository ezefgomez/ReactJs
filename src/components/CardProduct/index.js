import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import "./styles.css";


function CardProduct({ productsdata }) {


    return (
        <Card className="card" style={{ width: '18rem' }}>
        <Card.Body className='cardBody'>
            <Card.Img style={{ height: '18rem' }} variant="top" src={productsdata.img} />
            <Link to={`/detalle/${productsdata.id}`}>
            <Card.Title className='nombreArticulo'>{productsdata.name}</Card.Title>
            </Link>
            <Card.Text>{productsdata.description}</Card.Text>
            <ListGroup className="list-group">
            <ListGroup.Item>{"Cantidad: " + productsdata.stock}</ListGroup.Item>
            <ListGroup.Item>{"$" + productsdata.price}</ListGroup.Item>
            </ListGroup>
        </Card.Body>
        </Card>
    );
}

export default CardProduct;