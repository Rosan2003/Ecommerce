import productList from '../data/products';
import Product from '../components/product';
import {Row, Col, Container} from 'react-bootstrap';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useAuth } from '../hooks/useAuth';

// const productList = [
//     {
//         id: 1,
//         title: "GTR",
//         image: '/photos/gtr.jpg'
//     },
//     {
//         id: 2,
//         title: "MERCEDES",
//         image: '/photos/mercedes.jpg'
//     },
//     {
//         id: 3,
//         title: "MUSTANG",
//         image: '/photos/mustang.jpg'
//     }
// ];

// function home(){
//     return productList.map((p)=> <Product title={p.title} pic={p.image}/>)
// }

function Home(){
    const [data,setData] = useState([]);
    const a = useAuth();
    console.log(a);
    useEffect(()=>{
        axios
            .get('/api/products')
            .then((resp)=> setData(resp.data))
            .catch((err) => console.log("Err", err))
    },[])
    return(
        <Container>
                    <Row>
                        { data.map((p)=> {return(
                                <Col sm={12} md={4} key={p._id}>
                                <Product product={p} />
                                </Col>
                                );
                        })}
                    </Row>
        </Container>
    );
}

export default Home;