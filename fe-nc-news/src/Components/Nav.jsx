import { useState } from "react";


const Nav = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <nav className="navbar">
            <button className="nav-button" onClick={handleOpen}>Topics</button>
            {open ? (
                <ul className="topics">
                    <li className="topic">
                        <button>Coding</button>
                    </li>
                    <li className="topic">
                        <button>Football</button>
                    </li>
                    <li className="topic">
                        <button>Cooking</button>
                    </li>
                </ul>
            ) : null}

            <button className="nav-button">Create Article</button>
            <button className="nav-button">Profile</button>

        </nav>
    );
};

export default Nav;