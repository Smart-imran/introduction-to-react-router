import { useNavigate, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();
    const navigate = useNavigate();
    const hancldeClick = () =>{
        navigate('/');
    }

    return (
        
        <div>
            <h2>opps </h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>

                    <h3>Page Not Found</h3>
                    <p>Go back where you from </p>
                    <button onClick={hancldeClick}>Home</button>
                </div>
            }
        </div>
    );
};

export default ErrorPage;