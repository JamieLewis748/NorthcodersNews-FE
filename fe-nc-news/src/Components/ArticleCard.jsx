import { Link } from "react-router-dom";
import { fetchAllArticles, patchArticleByArticleId } from "../api";
import { useState } from "react";

const ArticleCard = ({ article }) => {
    const [currentVotes, setCurrentVotes] = useState(article.votes);
    const [errorMessage, setErrorMessage] = useState("");

    const handleUpvote = () => {
        setCurrentVotes(currentVotes + 1);
        setErrorMessage(null);
        patchArticleByArticleId(article.article_id, 1)
            .catch(() => {
                setErrorMessage("There was a problem submitting your vote, please try again");
            });
    };

    const handleDownvote = () => {
        setCurrentVotes(currentVotes - 1);
        setErrorMessage(null);
        patchArticleByArticleId(article.article_id, -1)
            .catch(() => {
                setErrorMessage("There was a problem submitting your vote, please try again");
            });
    };


    return (
        <li className="article_card">
            <article>
                <header className="like-comment">
                    <p>Created by {article.author}</p>
                </header>
                <Link to={`/article/${article.article_id}`}>
                    <div className="linkBox">
                        <h3 className="article_title">{article.title}</h3>
                        <img className='article_card_image' src={article.article_img_url} alt={article.title} />
                    </div>
                </Link>
            </article >
            <footer className="like-comment">

                <button id="like-button" onClick={handleUpvote}>Like</button>
                <p>Votes: {currentVotes}</p>
                <button id="dislike-button" onClick={handleDownvote}>Dislike</button>

                <Link to={`/article/${article.article_id}`}><button id="comment-button">Comment</button></Link>
            </footer>
            {errorMessage && <div className="error"> {errorMessage} </div>}
        </li>
    );
};

export default ArticleCard;