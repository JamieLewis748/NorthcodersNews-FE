
const CommentCard = ({ comment }) => {


    return (
        <li className="comment-card">
            <h3>{comment.author} at {comment.created_at}</h3>
            <p>{comment.body}</p>
            <footer className="comment-like">
                <p>Votes {comment.votes}</p>
                <button >Like</button>
                <button >Dislike</button>
            </footer>
        </li>
    );
};

export default CommentCard;