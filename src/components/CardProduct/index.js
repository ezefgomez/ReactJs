import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CardProduct({ data }) {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>{data.description}</Card.Text>
            <ListGroup className="list-group">
                <ListGroup.Item>{data.stock}</ListGroup.Item>
                <ListGroup.Item>{data.price}</ListGroup.Item>
            </ListGroup>
            <Button variant="primary">Agregar al carrito</Button>
        </Card.Body>
        </Card>
    );
}

export default CardProduct;