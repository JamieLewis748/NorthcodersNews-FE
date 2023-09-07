import axios from "axios";

export const fetchAllArticles = (topic, sort) => {
    return axios
        .get("https://nc-news-app-wdjy.onrender.com/api/articles", { params: { topic, sort_by: sort } })
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
