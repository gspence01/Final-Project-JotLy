import PostCard from "./PostCard"
import { DataContext } from "../context/DataContext"
import { useContext } from "react"
import { CurrentUser } from "../context/CurrentUser"

export default function PrivateContainer(){
    const data = useContext(DataContext)
    const user = useContext(CurrentUser).currentUser
    

    const posts = data.map((item, index) => {
        if(item.is_private && user.user_id === item.user_id){
            return(
                <PostCard item={item} key={index} />
            )
        }
    })

    return (
        <div style={{width:'75vw', 'margin':'auto', minWidth:'500px', minHeight:'100%'}}>
            {posts}
        </div>
    )
}