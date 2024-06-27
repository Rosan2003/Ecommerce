import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CiShoppingCart } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Badge, Button } from 'react-bootstrap';
import { useCart } from '../hooks/useCart';

function Header() {
    const {user,setUser} = useAuth();
    const {cart} = useCart();
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand href="#home" >E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <NavLink to='/' className='nav-link' >Home</NavLink>
            <NavLink to="/cart" className='nav-link' >
            <CiShoppingCart />
            <span style={{marginLeft: "5px" }}>cart</span>
            {cart.length != 0 && <Badge bg='primary' >{cart.length}</Badge>}
            </NavLink>
            {user? (
                <Button variant='light'
                    onClick={()=>{
                        localStorage.removeItem("token");
                        setUser(null);
                    }}>
                        logout
                    </Button>
            ):(
                <NavLink to='/login' className='nav-link' >
                <CiLogin />
                <span style={{marginLeft: "5px"}}>login</span>
                </NavLink>
            )}
            </Nav>
            <NavLink to='/signup'>
                <Button variant="light" style={{marginLeft: "5px"}}>
                    signup
                </Button>
            </NavLink>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default Header;