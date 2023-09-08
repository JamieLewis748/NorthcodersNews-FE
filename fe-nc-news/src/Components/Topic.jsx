
import { useParams } from "react-router-dom";
import ArticleList from "./ArticleList";

const Topic = () => {
    const { topic } = useParams();


    return (
        <div className="topic">
            <h2 className="topic-header">{topic}</h2>
            <ArticleList topic={topic} />
        </div>
    );
};

export default Topic;