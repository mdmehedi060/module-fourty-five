import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, website} = user;
    return (
        <div>
            <h2 className="text-3xl text-center ">Details About Users: {name}</h2>
            <p className="text-2xl text-center ">Website:{website}</p>
        </div>
    );
};

export default UserDetails;