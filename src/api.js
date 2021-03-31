import axios from "axios";

export function getUserData() {
    return axios.get("https://605dfa019386d200171bb9b3.mockapi.io/Dashboard");

}

export function postUserData(data) {
    return axios.post(`https://605dfa019386d200171bb9b3.mockapi.io/Dashboard`,data);

}

export function getUserbyId(id) {
    return axios.get(`https://605dfa019386d200171bb9b3.mockapi.io/Dashboard/${id}`);

}

export function updateUserbyId(id,data) {
    return axios.put(`https://605dfa019386d200171bb9b3.mockapi.io/Dashboard/${id}`,data);

}

export function deleteUserbyId(id) {
    return axios.delete(`https://605dfa019386d200171bb9b3.mockapi.io/Dashboard${id}`);

}
