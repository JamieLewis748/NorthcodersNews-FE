import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Contexts/Users";
import ToggleUser from "./ToggleUser";


const Header = () => {
    const { user } = useContext(UserContext);

    return (
        <header className="header">
            <Link to="/">
                <h1>Northcoders News</h1>
            </Link>
            <div className="toggle-user-container">
                <ToggleUser />
            </div>
            {user && <p>Welcome {user.name}</p>}
        </header>
    );

};

export default Header;