import axios from "axios";
export default function apiRequest(method, endpoint, data, headers = {}){
    const defaultHeaders = {}

    return axios({
        url: 'http://us-central1-js04-b4877.cloudfunctions.net/' + endpoint,
        method,
        data,
        headers: {...defaultHeaders, ...headers}
    })
    .then(response => response.data)
}