import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:3002/blogs');

    // const handleDelete = (id) => {
    //   const newBlogs = blogs.filter(blog => blog.id !== id);
    //   setBlogs(newBlogs);
    // }
    
    return (
      <div className="Home">
        {error && <div> { error } </div> }
        {isPending && <div>Loading....</div>}
        {blogs && <BlogList blogs = { blogs } title = "All Blogs !"/>}
      </div>
    );
  }

   
  export default Home;