import axios from 'axios';

export const FETCH_LOGINUSERS = 'fetch_logInUsers';
export const FETCH_USERS = 'fetch_users';
export const FETCH_CHAT = 'fetch_chat';
export const CREATE_POST = 'create_Post';
export const CURRENT_USER ="current_user";
export const SELECTED_USER="selected_user";

const ROOT_URL = 'https://chatty-app-json-server.herokuapp.com'
//const ROOT_URL = 'http://localhost:3000'

export function fetchLogInUsers(){
    const request = axios.get(`${ROOT_URL}/users?id=1&id=2`);
    return {
        type: FETCH_LOGINUSERS,
        payload: request
    };
}

export function fetchUsers(friendId){
    const request = axios.get(`${ROOT_URL}/users?friendId=${friendId}`);
    return {
        type: FETCH_USERS,
        payload: request
    };
}

export function fetchChat(chatId){
    const request = axios.get(`${ROOT_URL}/posts?chatId=${chatId}`);
    return {
        type: FETCH_CHAT,
        payload: request
        };
    }

export function createPost (values, callback) {
    const request = axios.post(`${ROOT_URL}/posts`, values)
    .then(() => callback());
        return {
            type: CREATE_POST,
            payload: request
        };
    }
    
export function currentUser(id){
    return{
        type: CURRENT_USER,
        payload: id
        };
    }

export function selectedUser(id){
 const request = axios.get(`${ROOT_URL}/users?id=${id}`);
 return {
    type: SELECTED_USER,
    payload: request
    };
} 


