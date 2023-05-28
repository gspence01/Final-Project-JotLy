//Tab idea based on https://react-bootstrap.netlify.app/docs/components/tabs
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Home(){
    return (
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
    )
}