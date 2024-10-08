import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {

    const {userId,id,title,body} = post;

    const navigate = useNavigate();
    const postStyle ={
        border:'3px solid black',
            padding:'5px',
            borderRadius: '20px',
            margin:'10px'
    }

    const hancldeClick = () =>{
        navigate(`/post/${id}`);
    }
    return (
        <div style={postStyle}>
            <h2>Post Details...</h2>
            <h3>UserID: {id}</h3>
            <h2><small>Title: {title}</small></h2>
            <p>{body}</p>
            <Link to={`/post/${id}`}><button>Click ME</button></Link>

            <button onClick={hancldeClick}>Click To see </button>
        </div>
    );
};

export default Post;
