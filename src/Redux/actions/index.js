import { FILTER_DOGS, GET_DOGS, GET_TEMPERAMENTS, GET_INFO_DOG } from "../constants"

export function getDogs(payload){
    return{
        type:GET_DOGS,
        payload
    }
}

export function getTemperaments(payload){
    return{
        type:GET_TEMPERAMENTS,
        payload
    }
}

export function getFilterDogs(payload){
    return{
        type:FILTER_DOGS,
        payload
    }
}

export function getInfoDog(payload){
    return{
        type:GET_INFO_DOG,
        payload
    }
}