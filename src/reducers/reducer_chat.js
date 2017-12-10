import _ from 'lodash';
import { FETCH_CHAT } from '../actions/index';


export default function(state =[], action) {
    console.log('Action received', action)
    switch(action.type) {
        case FETCH_CHAT:
        return action.payload.data;
    }
    return state;
}