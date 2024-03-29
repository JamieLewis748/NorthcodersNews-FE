import { useContext, useState } from "react";
import { postNewComment } from "../api";
import { UserContext } from "../Contexts/Users";


const CommentAdder = ({ articleId, updateComments }) => {
    const [newComment, setNewComment] = useState("");
    const { user } = useContext(UserContext);
    const [isCommentValid, setIsCommentValid] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!user) {
            setErrorMessage('You must be logged in as a user to post comments');
            setIsSubmitting(false);
            return;
        } else {
            setErrorMessage("");
        }

        if (newComment.trim("").length === 0) {
            setIsCommentValid(false);
            setErrorMessage("Please enter a comment first");
            return;
        }

        if (isSubmitting) {
            return;
        }

        setIsSubmitting(true);

        postNewComment(articleId, { author: user.username, body: newComment }).then((comment) => {
            alert('Comment posted successfully!');
            setNewComment("");
            updateComments(comment);
            setIsSubmitting(false);
            setErrorMessage("");
        }).catch((error) => {
            setIsSubmitting(false);
            setErrorMessage("");
        });
    };

    return (
        <div className="comment-adder-container">
            <form className="comment-adder" onSubmit={handleSubmit}>
                <label htmlFor="newComment">Add a comment</label>
                <textarea
                    id="newComment"
                    value={newComment}
                    onChange={(e) => {
                        setNewComment(e.target.value);
                    }}
                ></textarea>
                <div className="comment-adder-footer">
                    <button disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Add Comment'}
                    </button>
                    {errorMessage && <div className="error"> {errorMessage} </div>}
                </div>
            </form>
        </div>
    );
};

export default CommentAdder;