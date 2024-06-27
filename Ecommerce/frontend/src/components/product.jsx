import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function product({product}) {
return (
    <Card style={{ width: '18rem' }} className='my-2 p-2' >
    <Card.Img variant="top" src={product.image} />
    <Card.Body>
        <Link to={`/product/${product._id}`} >
        <Card.Title >{product.name}</Card.Title>
        </Link>
    </Card.Body>
    </Card>
);
}

export default product;