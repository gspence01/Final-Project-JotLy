import PostCard from "./PostCard"
import { DataContext } from "../context/DataContext"
import { useContext } from "react"
import { CurrentUser } from "../context/CurrentUser"

export default function PrivateContainer(){
    const data = useContext(DataContext)
    const currentUser = useContext(CurrentUser)
    console.log(currentUser.fname)
    const posts = data.map((item, index) => {
        if(item.is_private ){
            return(
                <PostCard item={item} key={index} />
            )
        }
    })

    return (
        <div style={{width:'75vw', 'margin':'auto', minWidth:'500px'}}>
            {posts}
        </div>
    )
}