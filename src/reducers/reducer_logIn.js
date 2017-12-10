import _ from 'lodash';
import { FETCH_LOGINUSERS } from '../actions/index';


export default function (state = {}, action){
    switch (action.type) {

        case FETCH_LOGINUSERS:
        return _.mapKeys(action.payload.data, 'id');
        console.log(action.payload.data);

        default: 
        return state;

    }
}