import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>

            {
                navigation.state === 'loading' ? <p>Loading Data....</p> :
                <Outlet></Outlet>
            }
            
          

            <h3><Footer></Footer></h3>
        </div>
    );
};

export default Home;