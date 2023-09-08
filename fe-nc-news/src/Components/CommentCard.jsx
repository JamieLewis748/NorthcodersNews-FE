import { useContext } from "react";
import { UserContext } from "../Contexts/Users";
import { useState } from "react";
import { patchCommentByCommentId } from "../api";


const CommentCard = ({ comment, onDelete }) => {
    const { user } = useContext(UserContext);
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentVotes, setCurrentVotes] = useState(comment.votes);
    const [errorMessage, setErrorMessage] = useState("");
    const [hasVoted, setHasVoted] = useState(false);

    const handleDelete = () => {
        setIsDeleting(true);
        onDelete(comment.comment_id);
    };

    const handleVote = (voteValue) => {
        if (!hasVoted) {
            setCurrentVotes((prevVotes) => prevVotes + voteValue);
            setHasVoted(true);
            setErrorMessage(null);
            patchCommentByCommentId(comment.comment_id, voteValue)
                .catch(() => {
                    setCurrentVotes((prevVotes) => prevVotes - voteValue);
                    setHasVoted(false);
                    setErrorMessage("There was a problem submitting your vote, please try again");
                });
        }
    };

    const createdAt = new Date(comment.created_at).toLocaleString();

    return (
        <li className="comment-card">
            <h3 className="comment-header">{comment.author} on {createdAt}</h3>
            <div className="comment-container">
                <p>{comment.body}</p>
                {user && user.username === comment.author && (<button className="delete-button" onClick={handleDelete} disabled={isDeleting}>
                    {isDeleting ? "Deleting..." : "Remove comment"}
                </button>)}
            </div>
            <footer className="comment-like-container">
                <button className="vote-button" onClick={() => { handleVote(1); }} disabled={hasVoted}>👍</button>
                <p>Votes {currentVotes}</p>
                <button className="vote-button" onClick={() => { handleVote(-1); }} disabled={hasVoted}>👎</button>
            </footer>
            {errorMessage && <div className="error"> {errorMessage} </div>}
        </li>
    );
};

export default CommentCard;