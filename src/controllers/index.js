import Axios from 'axios'
import { DOGS, TEMPERAMENT } from '../routes'
import { order } from '../functions'
import { getDogs, getTemperaments } from '../Redux/actions'

export const getDataFromApi = async (dispatch,setLoading)=>{
    setLoading(true)
     await Axios.get(DOGS).then(res=>dispatch(getDogs(res.data)))
     await Axios.get(TEMPERAMENT).then(res=>{
        let sortedTemps = res.data.sort(order) 
        dispatch(getTemperaments(sortedTemps))
        })
    setLoading(false)
}
