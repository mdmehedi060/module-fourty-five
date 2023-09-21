import { useLoaderData } from "react-router-dom";
import Users from "../Users/Users";

const User = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div className="text-center">
            <h2 className="text-3xl font-bold">Our Users: {users.length}</h2>
            <p className="text-2xl font-bold">Fantastic & video user</p>
            <div className="grid grid-cols-3 gap-10">
                {
                    users.map(user=> <Users key={user.id} user={user}></Users>)
                }
            </div>
        </div>
    );
};

export default User;