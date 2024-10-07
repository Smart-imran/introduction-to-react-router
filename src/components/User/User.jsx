

const User = ({user}) => {

    const {id,name,email,phone} = user;

    const userStyle = 
    {
        border: '2px solid blue',
        padding: '10px',
        margin:'10px',
        borderRadius: '20px'
    }

    return (
        <div style={userStyle}>
            <p>ID: {id}</p>
            <h2>User: {name}</h2>
            <p>Email: {email}</p>
            <p>phone: {phone}</p>
            
        </div>
    );
};

export default User;