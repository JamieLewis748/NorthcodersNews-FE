import { fetchAllArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import SortSelect from "./SortSelect";

const ArticleList = ({ topic }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortCriteria, setSortCriteria] = useState('');

    useEffect(() => {
        fetchAllArticles(topic, sortCriteria)
            .then((data) => {
                setArticles(data);
                setLoading(false);
            });
    }, [topic, sortCriteria]);

    const handleSortChange = (newSortCriteria) => {
        setSortCriteria(newSortCriteria);
    };

    return (
        <ul className="article_list">
            <header>
                <SortSelect onSortChange={handleSortChange} />
            </header>
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