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
    const [isDeleting, setIsDeleting] = useState(false);



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
        setIsDeleting(true);
        deleteComment(id)
            .then(() => {
                setComments((currentComments) =>
                    currentComments.filter((comment) => comment.comment_id !== id)
                );
                setIsDeleting(false);
                alert("Comment successfully removed");
            }).catch((error) => {
                setIsDeleting(false);
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
                            <CommentCard key={comment.comment_id} comment={comment} onDelete={removeComment} isDeleting={isDeleting} />
                        ))}
                    </>
                )}
            </ul>
        </section>
    );
};

export default CommentList;