import axios from "axios";

export const fetchAllArticles = () => {
    return axios
        .get("https://nc-news-app-wdjy.onrender.com/api/articles")
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
