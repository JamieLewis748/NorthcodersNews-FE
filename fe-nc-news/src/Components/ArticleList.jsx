import { fetchAllArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAllArticles()
            .then((data) => {
                setArticles(data);
                setLoading(false);
            });
    }, []);

    return (
        <ul className="article_list">
            {loading ? (<p>Loading...</p>) : (
                <>
                    {articles.articles.map((article) => (
                        <ArticleCard key={article.article_id} article={article} />
                    ))}
                </>
            )}
        </ul>
    );
};

export default ArticleList;