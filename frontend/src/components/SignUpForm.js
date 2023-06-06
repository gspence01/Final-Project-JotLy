import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function SignupForm(){
    const navigate = useNavigate()

    const [user, setUser] = useState({
        fname:'',
        username:'',
        passwordDigest:''
    })

    async function handleSubmit(e){
        e.preventDefault()

        await fetch(`http://localhost:8801/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        navigate('/home')
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='fname'>What name do you like to go by?:</label><br />
            <input type='text'
                name='fname'
                id='fname'
                required
                value={user.fname}
                onChange={e => setUser({...user, fname: e.target.value})}
            /><br/>
            <label htmlFor='username'>Username:</label><br />
            <input 
                type='text' 
                name='username'
                value={user.username}
                onChange={e => setUser({...user, username: e.target.value})}
            /><br/>
            <label htmlFor='pass'>Password:</label><br />
            <input 
                type='password' 
                name='pass'
                value={user.passwordDigest}
                onChange={e => setUser({...user, passwordDigest: e.target.value})}
            /> <br />
            <Button variant='success' type='submit'>Sign Up</Button>
        </form>
    )
}