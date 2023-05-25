import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'

export default function NaviBar(){
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">JotLy</Navbar.Brand>
                    <Nav>
                        <Button variant='outline-info'>Sign Up</Button>
                        <Button variant='success'>Log In</Button>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}