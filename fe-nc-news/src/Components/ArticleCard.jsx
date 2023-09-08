import { Link } from "react-router-dom";
import { patchArticleByArticleId } from "../api";
import { useState } from "react";

const ArticleCard = ({ article }) => {
    const [currentVotes, setCurrentVotes] = useState(article.votes);
    const [errorMessage, setErrorMessage] = useState("");
    const [hasVoted, setHasVoted] = useState(false);


    const handleUpvote = () => {
        setCurrentVotes(curr => curr + 1);
        setErrorMessage(null);
        setHasVoted(true);
        patchArticleByArticleId(article.article_id, 1)
            .catch(() => {
                setHasVoted(false);
                setErrorMessage("There was a problem submitting your vote, please try again");
            });
    };


    const handleDownvote = () => {
        setCurrentVotes(curr => curr - 1);
        setErrorMessage(null);
        setHasVoted(true);
        patchArticleByArticleId(article.article_id, -1)
            .catch(() => {
                setHasVoted(false);
                setErrorMessage("There was a problem submitting your vote, please try again");
            });
    };


    const createdAt = new Date(article.created_at).toLocaleString();

    return (
        <li className="article_card">
            <header className="like-comment">
                <p>Created by {article.author} on {createdAt}</p>
            </header>
            <article>
                <Link to={`/article/${article.article_id}`}>
                    <div className="linkBox">
                        <h3 className="article_title">{article.title}</h3>
                        <img className='article_card_image' src={article.article_img_url} alt={article.title} />
                    </div>
                </Link>
            </article >
            <footer className="like-comment">
                <div className="vote-button-container">
                    <button className="vote-button" onClick={handleUpvote} disabled={hasVoted}>👍</button>
                    <p>Votes: {currentVotes}</p>
                    <button className="vote-button" onClick={handleDownvote} disabled={hasVoted}>👎</button>
                </div>
                <Link to={`/article/${article.article_id}`}><button id="comment-button">Comments: {article.comment_count}</button></Link>
            </footer>
            {errorMessage && <div className="error"> {errorMessage} </div>}
        </li >
    );
};


export default ArticleCard;