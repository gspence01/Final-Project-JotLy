import { createContext, useState, useEffect } from 'react'

export const CurrentUser = createContext()

export default function CurrentUserContext({ children }){
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const getUser = async () => {
            let response = await fetch('http://localhost:8801/authentication/profile', {
                credentials: 'include'
            })
            let user = await response.json()
            setCurrentUser(user)
        }
        getUser()
    }, [])
    return (
        <CurrentUser.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </CurrentUser.Provider>
    )
}