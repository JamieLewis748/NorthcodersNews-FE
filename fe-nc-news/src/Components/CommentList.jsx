import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { useParams } from "react-router-dom";
import { fetchCommentsByArticleId } from "../api";
import CommentAdder from "./CommentAdder";



const CommentList = () => {
    const { id } = useParams();
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        fetchCommentsByArticleId(id)
            .then((comments) => {
                setComments(comments);
                setLoading(false);
            });
    }, [id]);

    const updateComments = (comment) => {
        setComments((currentComments) => {
            return [comment, ...currentComments];
        });
    };

    return (
        <section>
            <CommentAdder articleId={id} updateComments={updateComments} />
            <ul className="comment_list">
                {loading ? (<p>Loading...</p>) : (
                    <>
                        {comments.map((comment) => (
                            <CommentCard key={comment.comment_id} comment={comment} />
                        ))}
                    </>
                )}
            </ul>
        </section>
    );
};

export default CommentList;