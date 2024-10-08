import { useLoaderData } from "react-router-dom";


const UserDetails = () => {

    const user = useLoaderData();

    const {id,name,email,phone} = user;
    return (
        <div>
            <h2>Details userID: {id} </h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default UserDetails;