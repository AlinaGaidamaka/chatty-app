import { CURRENT_USER } from '../actions/index';


export default function(state = '', action) {
    console.log('Curent User', action)
    switch(action.type) {
        case CURRENT_USER:
        return action.payload;
    }
    return state;
}