const ArticleCard = ({ article }) => {
    return (
        <article className="article_card">
            <header className="like-comment">
                <p>Created by {article.author}</p>
            </header>
            <h3 className="article_title">{article.title}</h3>
            <img className='article_card_image' src={article.article_img_url} alt={article.title} />
            <footer className="like-comment">
                <button>Like</button>
                <button>Dislike</button>
                <button>Comment</button>
            </footer>
        </article >
    );
};

export default ArticleCard;