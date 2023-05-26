import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export default function NaviBar(){
    //Modal setup thanks to https://react-bootstrap.netlify.app/docs/components/modal/
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">JotLy</Navbar.Brand>
                    <Nav>
                        <Button variant='outline-info' onClick={handleOpen}>Sign Up</Button>
                        <Button variant='success' onClick={handleOpen}>Log In</Button>
                    </Nav>
                </Container>
            </Navbar>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Welcome to JotLog!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label htmlFor='username'>Username:</label><br />
                        <input type='text' name='username' /><br/>
                        <label htmlFor='pass'>Password:</label><br />
                        <input type='password' name='pass'/>
                        
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <p>hi</p>
                </Modal.Footer>
            </Modal>
        </>
    )
}