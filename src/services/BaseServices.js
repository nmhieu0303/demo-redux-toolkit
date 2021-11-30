import axios from "axios";

export class BaseServices {
    get = (url) => {
        return axios.get(url);
    }
    delete = (url) => {

        // return axios.delete(url, { headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN)}` } });
        return axios.delete(url);
    }
    put = (url, model) => {
        return axios.put(url, model);
    }
    post = (url, model) => {
        return axios.post(url, model);
    }
}