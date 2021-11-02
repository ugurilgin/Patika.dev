import {React,useState,useEffect} from 'react'
import Card from './Card'
import NoImage from "../img/noimage.png"



function BlogArea() {
    const [posts, setPosts] = useState();
  useEffect(() => {
    fetchMyPosts();
  }, []);
  const fetchMyPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await response.json();

    setPosts(json);
  };
  if (!posts) return <h3>...Loading</h3>;
    return (
        <>
             <h1>Blog</h1>
        <div className="blog-area">
          
           
           
            {posts.map((post) => (
                 <Card img={NoImage} name={post.title} about={post.body} />
                 ))}
      
            
        </div>
        </>
    )
}

export default BlogArea
