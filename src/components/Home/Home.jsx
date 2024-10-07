import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <div>
            <Header></Header>
            
            <Outlet></Outlet>

            <h3><Footer></Footer></h3>
        </div>
    );
};

export default Home;