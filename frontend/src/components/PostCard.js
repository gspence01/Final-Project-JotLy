import { useContext } from "react"
import { CurrentUser } from "../context/CurrentUser"

export default function PostCard(props) {
    const user = useContext(CurrentUser).currentUser

    const deletePost = async (id) => {
        await fetch(`http://localhost:8801/entries/${id}`, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json'
            }
        })
    }

    const deleteButton = () => {
        return <button onClick={deletePost.bind(this, props.item.entry_id)}>delete</button>
    }

    return (
        <div id="post-card" style={{padding:'10px', margin:'20px'}}>
            <h3><strong>{props.item.title}</strong></h3>
            <p>{props.item.username} is feeling {props.item.feeling}</p>
            <p>{props.item.content}</p>
            <div>
                {user.user_id === props.item.user_id ? deleteButton() : null}
            </div>
        </div>
    )
}