import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function LoginForm(){
    const navigate = useNavigate()

    const [errorMessage, setErrorMessage] = useState(null)
    const [auth, setAuth] = useState({
        username:'',
        passwordDigest:''
    })

    async function handleSubmit(e){
        e.preventDefault()

        const response = await fetch(`http://localhost:8801/authentication`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(auth)
        })

        const data = await response.json()
        
        if (response.status === 200){
            navigate('/home')
        } else {
            setErrorMessage(data.message)
        }
    }

    return(
        <>
        {errorMessage !== null? 
            (
                <div className='alert alert-danger' role='alert'>
                    {errorMessage}
                </div>
            ) : null
        }

        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username:</label><br />
            <input 
                type='text' 
                name='username'
                value={auth.username}
                onChange={e => setAuth({...auth, username: e.target.value})}
            /><br/>
            <label htmlFor='pass'>Password:</label><br />
            <input 
                type='password' 
                name='pass'
                value={auth.passwordDigest}
                onChange={e => setAuth({...auth, passwordDigest: e.target.value})}
            /> <br />
            <Button variant='success' type='submit'>Log In!</Button>
        </form>
        </>
    )
}