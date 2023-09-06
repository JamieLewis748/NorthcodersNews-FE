import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api";


const Nav = () => {
    const [topics, setTopics] = useState([]);
    const [open, setOpen] = useState(false);


    useEffect(() => {
        getTopics().then((data) => {
            setTopics(data);
        });
    }, []);

    console.log("🚀 ~ topics:", topics);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <nav className="navbar">
            <button className="nav-button" onClick={handleOpen}>Topics</button>
            {open ? (
                <ul className="topics">
                    {topics.map((topic) => (
                        <li className="topic" key={topic.slug}>
                            <Link to={`/topic/${topic.slug}`}>{topic.slug}</Link>
                        </li>
                    ))}
                </ul>
            ) : null}

            <button className="nav-button">Create Article</button>
            <Link className="nav-link" to="/profile">Profile</Link>
        </nav>
    );
};

export default Nav;