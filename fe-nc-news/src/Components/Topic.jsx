
import { useParams } from "react-router-dom";
import ArticleList from "./ArticleList";

const Topic = () => {
    const { topic } = useParams();
    console.log("🚀 ~ topic:", topic);


    return (
        <div className="topic">
            <h2>{topic}</h2>
            <ArticleList topic={topic} />
        </div>
    );
};

export default Topic;