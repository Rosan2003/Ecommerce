import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Row, Col, Container, Image, ListGroup, Badge, Button} from "react-bootstrap";
import Ratings from "../components/rating";
import { useCart } from "../hooks/useCart";

const ProductDetails = () => {
    const {cart,dispatch}= useCart();
    const [product, setProduct] = useState({});
    const { productid } = useParams();
useEffect(() => {
    axios
        .get("/api/products?productId=" + productid)
        .then((res) => setProduct(res.data))
        .catch((err) => console.log(err.message));
    }, []);

    const addCart=() =>{
        dispatch({
            type: "ADD",
            payload:{
                _id: product._id,
                name: product.name,
                image: product.image,
                price: product.price
            },
        })
    }
console.log(cart)
    return (
        <>
        <Container>
            <Row>
                <Col>
                    <Image src={product.image} />
                </Col>
                <Col>
                    <ListGroup>
                    <ListGroup.Item>{product.name}</ListGroup.Item>
                    <ListGroup.Item>{product.description}</ListGroup.Item>
                    <ListGroup.Item>
                        {product.category}-{product.brand}-${product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        {product.countInStock > 0 ? (
                    <Badge bg="info">In Stock</Badge>
                    ) : (
                    <Badge bg="danger">Out of Stock</Badge>
                    )}
                    <Ratings rating={product.rating} />
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button onClick ={addCart}>Add to Cart</Button>
                </ListGroup.Item>
                </ListGroup>
                </Col>
        </Row>
        </Container>
    </>
    );
};

export default ProductDetails;