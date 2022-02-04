import { FILTER_DOGS, GET_DOGS, GET_INFO_DOG } from "../constants"

const initialState = {
    dogs:[],
    filterDogs:[],
    infoDog:{}
}

export function dogsReducer(state = initialState,{ type , payload }){
    switch(type){
        case GET_DOGS:
            return {
                ...state,
                dogs:payload
            }
        case FILTER_DOGS:
            return {
                ...state,
                filterDogs:payload
            }
        case GET_INFO_DOG:
            return{
                ...state,
                infoDog:payload
            }
        default:
            return state
    }
}