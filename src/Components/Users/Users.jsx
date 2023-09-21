import { Link } from "react-router-dom";

const Users = ({user}) => {
    const {id, name, email,phone}=user;
    return (
        <div className="border-purple-700 border
         text-center  rounded-md ">
            <h2>{name}</h2>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>
            <Link className="text-blue-700" to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default Users;