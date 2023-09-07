import { useContext } from "react";
import { UserContext } from "../Contexts/Users";


const CommentCard = ({ comment, onDelete, isDeleting }) => {
    const { user } = useContext(UserContext);

    const handleDelete = () => {
        onDelete(comment.comment_id);
    };

    return (
        <li className="comment-card">
            <h3>{comment.author} at {comment.created_at}</h3>
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