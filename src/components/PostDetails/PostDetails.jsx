import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const{userId,id,title,body} = post;

    const navigate = useNavigate();
    const handleClick = () =>{
        navigate(-1);
    }

    const postStyle ={
        border:'3px solid black',
            padding:'5px',
            borderRadius: '20px',
            margin:'10px'
    }
    return (
        <div style={postStyle}>
            <h2>Post Details...</h2>
            <h3>UserID: {id}</h3>
            <h2><small>Title: {title}</small></h2>
            <p>{body}</p>
            <button onClick={handleClick}>GO BACK</button>
        </div>
    );
};

export default PostDetails;