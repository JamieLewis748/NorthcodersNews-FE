import axios from "axios";

export const fetchAllArticles = (topic, sort, order) => {

    return axios
        .get("https://nc-news-app-wdjy.onrender.com/api/articles", { params: { topic, sort_by: sort, order: order } })
        .then(({ data }) => {
            return data;
        });
};


export const fetchArticleById = (articleId) => {
    return axios
        .get(`https://nc-news-app-wdjy.onrender.com/api/articles/${articleId}`)
        .then(({ data }) => {
            return data;
        });
};

export const fetchCommentsByArticleId = (articleId) => {
    return axios
        .get(`https://nc-news-app-wdjy.onrender.com/api/articles/${articleId}/comments`)
        .then(({ data }) => {
            return data.comments;
        });
};

export const fetchUsers = () => {
    return axios
        .get(`https://nc-news-app-wdjy.onrender.com/api/users`)
        .then(({ data }) => {
            return data.users;
        });
};

export const patchArticleByArticleId = (articleId, numberOfVotes) => {
    return axios
        .patch(`https://nc-news-app-wdjy.onrender.com/api/articles/${articleId}`, { inc_votes: numberOfVotes })
        .then(({ data }) => {
            return data.votes;
        });
};
export const patchCommentByCommentId = (commentId, numberOfVotes) => {
    return axios
        .patch(`https://nc-news-app-wdjy.onrender.com/api/comments/${commentId}`, { inc_votes: numberOfVotes })
        .then(({ data }) => {
            console.log("🚀 ~ data.votes:", data.votes);
            return data.votes;
        });
};

export const postNewComment = (articleId, comment) => {
    return axios
        .post(`https://nc-news-app-wdjy.onrender.com/api/articles/${articleId}/comments`, { author: comment.author, body: comment.body })
        .then(({ data }) => {
            return data.newComment;
        });
};


export const getTopics = () => {
    return axios
        .get("https://nc-news-app-wdjy.onrender.com/api/topics")
        .then(({ data }) => {
            return data;
        });
};

export const deleteComment = (commentId) => {
    return axios
        .delete(`https://nc-news-app-wdjy.onrender.com/api/comments/${commentId}`, { comment_id: commentId })
        .then(({ data }) => {
            return data;
        });
};