import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api";


const Nav = () => {
    const [topics, setTopics] = useState([]);
    const [open, setOpen] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);


    useEffect(() => {
        getTopics().then((data) => {
            setTopics(data);
        });
    }, []);

    const handleOpen = () => {
        clearTimeout(hoverTimeout);
        setOpen(true);
    };

    const handleClose = () => {
        const timeoutId = setTimeout(() => {
            setOpen(false);
        }, 300);
        setHoverTimeout(timeoutId);
    };
    return (
        <nav className="navbar">
            <div className="nav-container" onMouseEnter={handleOpen} onMouseLeave={handleClose}>
                <div className="nav-button">Topics</div>
                <ul className="topics">
                    {topics.map((topic) => (
                        <Link to={`/topic/${topic.slug}`} key={topic.slug} className="nav-link" topics={topics}>
                            <li id="topic">
                                {topic.slug}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <button className="nav-button">Create Article</button>
            <Link className="nav-link" to="/profile">
                Profile
            </Link>
        </nav >
    );
};

export default Nav;