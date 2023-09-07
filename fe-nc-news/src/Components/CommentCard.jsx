import { useContext } from "react";
import { UserContext } from "../Contexts/Users";
import { useState } from "react";


const CommentCard = ({ comment, onDelete }) => {
    const { user } = useContext(UserContext);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = () => {
        setIsDeleting(true);
        onDelete(comment.comment_id);
    };


    const createdAt = new Date(comment.created_at).toLocaleString();

    return (
        <li className="comment-card">
            <h3>{comment.author} on {createdAt}</h3>
            <div className="comment-container">
                <p>{comment.body}</p>
                {user && user.username === comment.author && (<button className="delete-button" onClick={handleDelete} disabled={isDeleting}>
                    {isDeleting ? "Deleting..." : "Remove comment"}
                </button>)}
            </div>
            <footer className="comment-like">
                <p>Votes {comment.votes}</p>
                <button>Like</button>
                <button>Dislike</button>
            </footer>
        </li>
    );
};

export default CommentCard;