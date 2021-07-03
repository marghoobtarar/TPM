import {
    LISTING,
} from '../actions/types';

const initialState = {
    listing:null
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case LISTING:
            return {
                ...state,
                list:payload
            }
        
              default:
            return state
    }
};


  