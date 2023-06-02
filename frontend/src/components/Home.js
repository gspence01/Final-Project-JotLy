//Tab idea based on https://react-bootstrap.netlify.app/docs/components/tabs
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import PostForm from './PostForm';


export default function Home(){
    const [show, setShow] = useState(false)
    const handleOpen = () => setShow(true)
    const handleClose = () => setShow(false)

    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand>JotLy</Navbar.Brand>
                    <Nav><p>Logged in as USER</p></Nav>
                </Container>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>Write an entry!</Modal.Header>
                <Modal.Body>
                    <PostForm />
                </Modal.Body>
            </Modal>
            <Button onClick={handleOpen} variant='info' style={
                {height:'40px', 
                width:'40px', 
                borderRadius:'50%', 
                position:'relative', 
                top:'50vh', 
                left:'45vw', 
                fontSize:'xx-large', 
                padding:'0px',
                lineHeight:'30px', 
                color:'white'}}>+</Button>
            <Tabs
                defaultActiveKey='userPosts'
                className='mb-3'
            >
                <Tab eventKey='userPosts' title='User Posts'>
                    <h1>UserPosts</h1>
                </Tab>
                <Tab eventKey='yourPosts' title='Your Posts'>
                    <h1>Your Posts</h1>
                </Tab>
            </Tabs>
        </div>
    )
}