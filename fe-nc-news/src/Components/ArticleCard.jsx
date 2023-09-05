import { useNavigate } from 'react-router-dom';

const ArticleCard = ({ article }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/article/${article.article_id}`);
    };
    return (
        <li className="article_card">
            <article onClick={handleCardClick}>
                <header className="like-comment">
                    <p>Created by {article.author}</p>
                </header>
                <h3 className="article_title">{article.title}</h3>
                <img className='article_card_image' src={article.article_img_url} alt={article.title} />
            </article >
            <footer className="like-comment">
                <button>Like</button>
                <button>Dislike</button>
                <button>Comment</button>
            </footer>
        </li>
    );
};

export default ArticleCard;