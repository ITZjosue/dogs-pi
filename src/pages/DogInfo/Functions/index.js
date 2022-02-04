import Axios from 'axios'
import { DOGS } from '../../../routes'
import { getInfoDog } from '../../../Redux/actions'

export const getDog = async (idDog,dispatch,setLoading)=>{
    setLoading(true)
    const dog = await Axios.get(`${DOGS}/${idDog}`).then(res=>res.data)
    dispatch(getInfoDog(dog))
    setLoading(false)
}