import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('');
    const[isPending, setIsPending] = useState(false);

    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = { title, body, author};
        
        setIsPending(true);

        fetch('http://localhost:3002/blogs',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            history.push('/');
            })
    }
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required />
                <label>Blog Body</label>
                <textarea 
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
                >
                </textarea>
                <label>Blog Author</label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Srinath Raghavan">Srinath Raghavan</option>
                    <option value="Sanjeev Sanyal">Sanjeev Sanyal</option>
                    <option value="Bipan Chandra">Bipan Chandra</option>
                    <option value="C.Rajagopalachari">C.Rajagopalachari</option>
                    <option value="Willam Shakespeare">Willam Shakespeare</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Wait</button>}
            </form>
            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
        </div>
     );
}
 
export default Create;