//Tab idea based on https://react-bootstrap.netlify.app/docs/components/tabs
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import PostForm from './PostForm';
import SplashPage from './SplashPage'
import { DataContext } from '../context/DataContext';
import PublicContainer from './PublicContainer';
import { CurrentUser } from '../context/CurrentUser';


export default function Home(){
    const [show, setShow] = useState(false)
    const [postList, setPostList] = useState([{},{}])
    const handleOpen = () => setShow(true)
    const handleClose = () => setShow(false)
    const { currentUser } = useContext(CurrentUser)
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:8801/entries')
        .then((response) => {
            if(!response.ok){
                throw new Error("error!")
            }
            return response.json()
        })
        .then((resData) => {
            setPostList(resData)
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [])
    
    if(currentUser !== null){
    return (
        <div id='home-page'>
            <Navbar>
                <Container>
                    <Navbar.Brand>JotLog</Navbar.Brand>
                    <Nav><p>Logged in as <strong>{currentUser.fname}</strong></p></Nav>
                </Container>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>Write an entry!</Modal.Header>
                <Modal.Body>
                    <PostForm item={currentUser}/>
                </Modal.Body>
            </Modal>
            <Button onClick={handleOpen} variant='info' style={
                {height:'50px', 
                width:'50px', 
                borderRadius:'50%', 
                position:'fixed', 
                bottom: '20px', 
                right:'20px', 
                fontSize:'xx-large', 
                padding:'0px',
                lineHeight:'30px', 
                color:'white'}}>+</Button>
            <DataContext.Provider value={postList}>
                <Tabs
                    defaultActiveKey='userPosts'
                    className='mb-3'
                    style={{color:'green'}}
                >
                    <Tab eventKey='userPosts' title='User Posts'>
                        <h1>Here's what everyone is writing about</h1>
                        <PublicContainer />
                    </Tab>
                    <Tab eventKey='yourPosts' title='Your Posts'>
                        <h1>Your Posts</h1>
                    </Tab>
                </Tabs>
            </DataContext.Provider>
        </div>
    )
} else {
    return (
        <SplashPage />
    )
}
}