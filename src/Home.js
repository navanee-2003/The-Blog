import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {

    const {data: blogs, isPending, error} = useFetch('https://blog-data-sample.herokuapp.com/blogs');

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
