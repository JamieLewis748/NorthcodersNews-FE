import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { fetchArticleById } from '../api';
import CommentList from './CommentList.jsx';



const ArticleFull = () => {
    const { id } = useParams();

    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchArticleById(id)
            .then((data) => {
                setArticle(data.article);
                setLoading(false);
            });
    }, [id]);

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
                <p>Votes {article.votes}</p>
                <p>Comments {article.comment_count}</p>
            </div>
            <CommentList />
        </div>
    );
};

export default ArticleFull;