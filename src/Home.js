import Bloglist from './Bloglist';
import useFetch from './useFetch';

const Home = () => {

  const {data : blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
  
  return (
    <>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      {blogs && <Bloglist blogs={blogs} title={"All Blogs"} />}
    </>
  );
}
 
export default Home;


