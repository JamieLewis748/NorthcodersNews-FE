import { fetchAllArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import SortSelect from "./SortSelect";

const ArticleList = ({ topic }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortCriteria, setSortCriteria] = useState('created_at');
    const [sortOrder, setSortOrder] = useState("asc");


    useEffect(() => {
        fetchAllArticles(topic, sortCriteria, sortOrder)
            .then((data) => {
                setArticles(data);
                setLoading(false);
            });
    }, [topic, sortCriteria, sortOrder]);

    const handleOrderChange = () => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newSortOrder);
    };

    const handleSortChange = (newSortCriteria) => {
        setSortCriteria(newSortCriteria);
    };

    return (
        <ul className="article_list">
            <header className="header-sort-order">
                <SortSelect onSortChange={handleSortChange} />
                <button onClick={handleOrderChange}>
                    Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
                </button>
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