 const Bloglist = ({blogs,title}) => {

    // const blogs=props.blogs;
    // const title=props.title;
    
    return ( 
        <div>
            <h1>{title}</h1>
            {blogs.map( blog => (
                <div className="blog-preview">
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    {/* <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>  */}
                </div>
            )
            )}
        </div>
     );
 }
  
 export default Bloglist;