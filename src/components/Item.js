import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ id, name, price, image }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    ${price}
                </Card.Text>
            <Button variant="primary"><Link to={`/item/${id}`} style={{ textDecoration: 'none', color: '#fff' }}>Ver producto</Link></Button>
            </Card.Body>
        </Card>
    );
}

export default Item;