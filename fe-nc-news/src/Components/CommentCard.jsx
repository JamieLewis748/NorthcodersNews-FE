const CommentCard = ({ comment }) => {
    return (
        <li className="comment-card">
            <h3>{comment.author} at {comment.created_at}</h3>
            <p>I am a comment card</p>
        </li>
    );
};

export default CommentCard;