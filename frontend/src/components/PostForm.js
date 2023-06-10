import Button from 'react-bootstrap/Button'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function PostForm(props){

    const currentDate = new Date()
    const date = currentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2')
    
    const now = new Date(date).toISOString();

    const navigate = useNavigate()

    const moodList = [
        ['Loved','FF6C6C'],
        ['Positive','FF9D6C'],
        ['Brave','FFBB6C'],
        ['Curious','FFD46C'],
        ['Inspired','FFEC6C'],
        ['Creative','F1FF6C'],
        ['Passionate','D9FF6C'],
        ['Eager','B1FF6C'],
        ['Grateful','98FF6C'],
        ['Peaceful','80FF6C'],
        ['Disgusted','6CFF76'],
        ['Isolated','6CFFA2'],
        ['Abandoned','6CFFD9'],
        ['Hurt','6CFFF6'],
        ['Depressed','6CECFF'],
        ['Jealous','6CCAFF'],
        ['Bored','6CACFF'],
        ['Remourseful','6C85FF'],
        ['Ashamed','766CFF'],
        ['Anxious','8A6CFF'],
        ['Overwhelmed','AC6CFF']]

    const [entry, setEntry] = useState({
        title:'',
        date:'',
        content: '',
        user_id: '',
        is_private: false,
        likes: 0,
        feeling:'',
        username: ''
    })

    async function handleSubmit(e){
        await fetch(`http://localhost:8801/entries`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...entry, date: now, user_id: props.item.user_id, username: props.item.fname})
        })
        navigate('/home')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='pubPriv'>Private thit Journal Entry?</label>
            <input 
                type='checkbox'
                name='pubPriv'
                checked={entry.is_private}
                onClick={e => setEntry({...entry, is_private: e.target.checked})} 
            /> <br />
            <label htmlFor="title">Title</label><br />
            <input
                type="text" 
                name="title"
                id="title" 
                value={entry.title}
                onChange={e => setEntry({...entry, title: e.target.value})} 
            /><br />

            <label htmlFor="entry">Journal Entry</label><br />
            <textarea 
                name="entry" 
                id="entry"
                required
                value={entry.content}
                onChange={e => setEntry({...entry, content: e.target.value})}
                style={{width:'100%'}} 
                /><br />

            <label htmlFor="mood">How are you feeling?</label>
            <select name="mood" id="mood" value={entry.feeling} onChange={e => setEntry({...entry, feeling: e.target.value})}>
                {
                    moodList.map((mood) => (
                        <option key={mood[0]} style={{backgroundColor:`#${mood[1]}`}} value={mood[0]}>{mood[0]}</option>
                    ))
                }
            </select> <br />
            <Button type='submit' variant='outline-success'>Submit</Button>
        </form>
    )
}