import axios from "axios";

export const fetchAllArticles = () => {
    return axios
        .get("https://nc-news-app-wdjy.onrender.com/api/articles")
        .then(({ data }) => {
            return data;
        });
};
