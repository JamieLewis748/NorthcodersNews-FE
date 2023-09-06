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
                        setIsCommentValid(true);
                    }}
                ></textarea>
                <button disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Add Comment'}
                </button>
            </form>
            {errorMessage && <div className="error"> {errorMessage} </div>}
        </div>
    );
};

export default CommentAdder;