import Card from 'react-bootstrap/Card';

const ItemDetail = ({ item }) => {

    return (
        <>
        {
            item ? (
                <Card style={{ width: '50rem' }} className='card-item-detail'>
                    <Card.Img variant="top" src={item.image}/>
                    <Card.Body className='card-body-item-detail'>
                        <div>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                ${item.price}
                            </Card.Text>
                        </div>
                        <div>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            ) : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;