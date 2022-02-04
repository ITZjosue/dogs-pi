import { GET_TEMPERAMENTS } from "../constants";

const initialState = {
    temps:[]
}

export function tempReducer(state = initialState,{type,payload}){
    switch (type){
        case GET_TEMPERAMENTS:
            return {
                ...state,
                temps:payload
            }
        default:
            return state
    }
}