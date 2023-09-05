import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {

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
                <button>Like</button>
                <button>Dislike</button>
                <button>Comment</button>
            </footer>
        </li>
    );
};

export default ArticleCard;