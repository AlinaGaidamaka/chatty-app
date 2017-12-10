import { SELECTED_USER } from '../actions/index';


export default function(state =[], action) {
    console.log('Selected user', action)
    switch(action.type) {
        case SELECTED_USER:
        return action.payload.data;
    }
    return state;
}