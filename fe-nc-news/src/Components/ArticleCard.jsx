const ArticleCard = ({ article }) => {
    { console.log(article.img_url); }
    return (
        <article className="article_card">
            <h3 className="article_title">{article.title}</h3>
            <img className='article_card_image' src={article.article_img_url} alt={article.title} />
        </article>
    );
};

export default ArticleCard;