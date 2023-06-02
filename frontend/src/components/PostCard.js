export default function PostCard(props) {
    return (
        <div id="post-card">
            <h3><strong>{props.item.title}</strong></h3>
            <p>This user is feeling {props.item.feeling}</p>
            <p>{props.item.content}</p>
        </div>
    )
}