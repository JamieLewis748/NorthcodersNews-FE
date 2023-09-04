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
        <section className="article_list">
            {loading ? (<p>Loading...</p>) : (
                <>
                    {articles.articles.map((article) => (
                        <li key={article.article_id}>
                            <ArticleCard article={article} />
                        </li>
                    ))}
                </>
            )}
        </section>
    );
};

export default ArticleList;