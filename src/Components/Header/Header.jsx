import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="text-center">
            <h2>Navbar</h2>
            <nav>
                <Link className="mr-8" to="/home">Home</Link>
                <Link className="mr-8" to="/about">About</Link>
                <Link className="mr-8" to="/users">Users</Link>
                <Link className="mr-8" to="/contract">Contract Ust</Link>
               
            </nav>
        </div>
    );
};

export default Header;