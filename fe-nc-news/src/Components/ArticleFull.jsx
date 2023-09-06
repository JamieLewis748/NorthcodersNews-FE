import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { fetchArticleById } from '../api';
import CommentList from './CommentList.jsx';
import { patchArticleByArticleId } from '../api';



const ArticleFull = () => {
    const { id } = useParams();

    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentVotes, setCurrentVotes] = useState(article.votes);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        fetchArticleById(id)
            .then((data) => {
                setArticle(data.article);
                setCurrentVotes(data.article.votes);
                setLoading(false);
            });
    }, [id]);

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

        <div className="full-article">
            <section className="article_full">
                <h1 id="article-full-h1">{article.title}</h1>
                <p>Created by {article.author} at {article.created_at}</p>
                <div className="image-container">
                    <img className="article_full_image" src={article.article_img_url} alt={article.title} />
                </div>
                <p className="article_body">{article.body}</p>
            </section>
            <div className="like-comment-article_full">
                <p>Votes {currentVotes}</p>
                <button onClick={handleUpvote}>Like</button>
                <button onClick={handleDownvote}>Dislike</button>
                <p>Comments {article.comment_count}</p>
            </div>
            {errorMessage && <div className="error"> {errorMessage} </div>}

            <CommentList />
        </div>

    );
};

export default ArticleFull;