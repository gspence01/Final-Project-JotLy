import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';

import SignupForm from './SignUpForm';
import LoginForm from './LoginForm';

export default function NaviBar(){
    //Modal setup thanks to https://react-bootstrap.netlify.app/docs/components/modal/
    const navigate = useNavigate()
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
                    <LoginForm />
                </Modal.Body>
                <Modal.Footer>
                    <p>By continuing, you agree to JotLog's Terms of Service. Stay cool and keep writing!</p>
                </Modal.Footer>
            </Modal>

            {/* Modal to SIGN IN */}
            <Modal show={showSI} onHide={handleCloseSI}>
                <Modal.Header closeButton>
                    <Modal.Title>Welcome to JotLog!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SignupForm />
                </Modal.Body>
                <Modal.Footer>
                    <p>By continuing, you agree to JotLog's Terms of Service. Stay cool and keep writing!</p>
                </Modal.Footer>
            </Modal>
        </>
    )
}