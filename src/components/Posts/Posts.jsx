import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


const Posts = () => {

    const posts = useLoaderData();
    const postStyle = {
        display: 'grid',
        "grid-template-columns": 'repeat(3, 1fr)', // হাইফেনসহ CSS প্রোপার্টি
        gap: '10px'
    };



    return (
        <div>
            <h2>Post Here: {posts.length}</h2>
            <div style={postStyle}>
            {
                posts.map((post)=> <Post
                key={post.id}
                post={post}                
                ></Post>)
            }
            </div>
        </div>
    );
};

export default Posts;