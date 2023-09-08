import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { useParams } from "react-router-dom";
import { fetchCommentsByArticleId } from "../api";
import CommentAdder from "./CommentAdder";
import { deleteComment } from "../api";



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

    const removeComment = (id) => {
        deleteComment(id)
            .then(() => {
                console.log("in then block after delete");
                alert("Comment successfully removed");
                setComments((currentComments) =>
                    currentComments.filter((comment) => comment.comment_id !== id)
                );

            }).catch((error) => {

                console.error("Error deleting comment:", error);
            });
    };

    return (
        <section>
            <CommentAdder articleId={id} updateComments={updateComments} />
            <ul className="comment_list">
                {loading ? (<p>Loading...</p>) : (
                    <>
                        {comments.map((comment) => (
                            <CommentCard key={comment.comment_id} comment={comment} onDelete={removeComment} />
                        ))}
                    </>
                )}
            </ul>
        </section>
    );
};

export default CommentList;