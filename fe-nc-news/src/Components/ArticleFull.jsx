import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { fetchArticleById } from '../api';
import CommentList from './CommentList.jsx';
import { patchArticleByArticleId } from '../api';
import Error404 from './Error404';



const ArticleFull = () => {
    const { id } = useParams();
    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentVotes, setCurrentVotes] = useState(article.votes);
    const [errorMessage, setErrorMessage] = useState("");
    const [hasVoted, setHasVoted] = useState(false);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        fetchArticleById(id)
            .then((data) => {
                setArticle(data.article);
                setCurrentVotes(data.article.votes);
                setLoading(false);
            }).catch((error) => {
                if (error.response.status === 404) {
                    setNotFound(true);
                }
            });
    }, [id]);

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

    if (notFound === true) {
        return <Error404 />;
    }

    return (
        <div className="full-article">
            <section className="article_full">
                <h1 id="article-full-h1">{article.title}</h1>
                <p>Created by {article.author} on {createdAt}</p>
                <div className="image-container">
                    <img className="article_full_image" src={article.article_img_url} alt={article.title} />
                </div>
                <p className="article_body">{article.body}</p>
            </section>
            <div className="like-comment-article_full">
                <div className="vote-button-container">
                    <button id="vote-button" onClick={handleUpvote} disabled={hasVoted}>👍</button>
                    <p>Votes {currentVotes}    </p>
                    <button id="vote-button" onClick={handleDownvote} disabled={hasVoted}>👎</button>
                </div>
                <p>Comments {article.comment_count}</p>
            </div>
            {errorMessage && <div className="error"> {errorMessage} </div>}

            <CommentList />
        </div>

    );
};

export default ArticleFull;