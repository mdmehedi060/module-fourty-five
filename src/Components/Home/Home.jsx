import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
          <h1 className="text-7xl font-bold text-center">
            This is the home component</h1>  
            <Outlet></Outlet>
        </div>
    );
};

export default Home;