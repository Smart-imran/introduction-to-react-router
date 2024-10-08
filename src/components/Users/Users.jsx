import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {

    const users = useLoaderData();
    
    const usersStyle = {
        display: 'grid',
        "grid-template-columns": 'repeat(3, 1fr)', // হাইফেনসহ CSS প্রোপার্টি
        gap: '10px'
    };

    return (
        <div>
            <h2>Our users: {users.length}</h2>
            <h2>Our Users</h2>
            <div style={usersStyle}>

                {
                    users.map(user =><User                    
                    user={user}
                    key={user.id}  
                                      
                    ></User>)
                }
            </div>
        </div>
    );
};

export default Users;