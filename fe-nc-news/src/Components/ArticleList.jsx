import { fetchAllArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import SortSelect from "./SortSelect";
import Error404 from "./Error404";
import { UserContext } from "../Contexts/Users";

const ArticleList = ({ topic }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortCriteria, setSortCriteria] = useState('created_at');
    const [sortOrder, setSortOrder] = useState("desc");
    const [notFound, setNotFound] = useState(false);


    useEffect(() => {
        fetchAllArticles(topic, sortCriteria, sortOrder)
            .then((data) => {
                setArticles(data);
                setLoading(false);
            }).catch((error) => {
                console.log("🚀 ~ error:", error);
                if (error.response.status === 404) {
                    setNotFound(true);
                }

            });
    }, [topic, sortCriteria, sortOrder]);

    const handleOrderChange = () => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newSortOrder);
    };

    const handleSortChange = (newSortCriteria) => {
        setSortCriteria(newSortCriteria);
    };

    if (notFound) {
        return <Error404 />;
    }


    return (
        <ul className="article_list">
            <header className="header-sort-order">
                <SortSelect onSortChange={handleSortChange} />
                <button className="order-button" onClick={handleOrderChange}>
                    Sort {sortOrder === 'asc' ? '⬆️' : '⬇️'}
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