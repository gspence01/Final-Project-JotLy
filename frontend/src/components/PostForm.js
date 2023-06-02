export default function PostForm(){
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

    return (
        <form>
            <label htmlFor="title" placeholder="Optional">Title</label><br />
            <input type="text" name="title"></input> <br />
            <label htmlFor="entry">Journal Entry</label><br />
            <textarea name="entry" required style={{width:'100%'}}></textarea><br />
            <label htmlFor="mood">How are you feeling?</label>
            <select name="mood">
                {
                    moodList.map((mood) => (
                        <option style={{backgroundColor:`#${mood[1]}`}} value={mood[0]}>{mood[0]}</option>
                    ))
                }
            </select>
        </form>
    )
}