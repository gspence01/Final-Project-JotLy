import PostCard from "./PostCard"
import { DataContext } from "../context/DataContext"
import { useContext } from "react"

export default function PublicContainer(){
    const data = useContext(DataContext)

    const posts = data.map((item, index) => {
        if(!item.is_private){
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