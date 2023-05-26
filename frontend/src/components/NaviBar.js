import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

export default function NaviBar(){
    //Modal setup thanks to https://react-bootstrap.netlify.app/docs/components/modal/
    const [showLI, setShowLI] = useState(false);
    const [showSI, setShowSI] = useState(false);

    const handleCloseSI = () => setShowSI(false);
    const handleOpenSI = () => setShowSI(true);

    const handleCloseLI = () => setShowLI(false);
    const handleOpenLI = () => setShowLI(true);

    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">JotLy</Navbar.Brand>
                    <Nav>
                        <Button variant='outline-info' onClick={handleOpenSI}>Sign Up</Button>
                        <Button variant='success' onClick={handleOpenLI}>Log In</Button>
                    </Nav>
                </Container>
            </Navbar>

            {/* Modal to Log In TO REFACTOR LATER*/}
            <Modal show={showLI} onHide={handleCloseLI}>
                <Modal.Header closeButton>
                    <Modal.Title>Welcome to JotLog!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label htmlFor='username'>Username:</label><br />
                        <input type='text' name='username' /><br/>
                        <label htmlFor='pass'>Password:</label><br />
                        <input type='password' name='pass'/> <br />
                        <Link to={'/home'}><Button variant='success'>Log In</Button></Link>
                        
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <p>By continuing, you agree to JotLog's Terms of Service. Stay cool and keep writing!</p>
                </Modal.Footer>
            </Modal>

            {/* Modal to SIGN In */}
            <Modal show={showSI} onHide={handleCloseSI}>
                <Modal.Header closeButton>
                    <Modal.Title>Welcome to JotLog!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label htmlFor='fName'>First name:</label><br />
                        <input type='text' name='fName' /><br/>
                        <label htmlFor='username'>Username:</label><br />
                        <input type='text' name='username' /><br/>
                        <label htmlFor='pass'>Password:</label><br />
                        <input type='password' name='pass'/> <br />
                        <Button variant='success'>Sign Up</Button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <p>By continuing, you agree to JotLog's Terms of Service. Stay cool and keep writing!</p>
                </Modal.Footer>
            </Modal>
        </>
    )
}