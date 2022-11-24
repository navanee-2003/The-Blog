import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { data:blog, isPending, error } = useFetch('https://blog-data-sample.herokuapp.com/blogs/' + id);

    const history = useHistory();
    const handleClick = () => {
        fetch('https://blog-data-sample.herokuapp.com/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }
    return ( 
        <div className="blog-details">
        { isPending && <div>Loading....</div>}
        { error && <div>{ error }</div>}
        { blog && (
            <article>
                <h2>{ blog.title }</h2>
                <p>{ blog.author }</p>
                <div>{ blog.body }</div>
                <button onClick={handleClick}>delete</button>
            </article>
        )}
        </div>
     );
}
 
export default BlogDetails;
