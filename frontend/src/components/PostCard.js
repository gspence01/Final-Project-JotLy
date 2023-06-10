export default function PostCard(props) {
    return (
        <div id="post-card" style={{padding:'10px', margin:'20px'}}>
            <h3><strong>{props.item.title}</strong></h3>
            <p>{props.item.username} is feeling {props.item.feeling}</p>
            <p>{props.item.content}</p>
        </div>
    )
}