// HOOKS
import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
// AXIOS
import Axios from 'axios'
// COMPONENTS
import Breeds from "../../components/Breeds"
import Pagination from "../../components/Pagination"
import Filter from "../../components/Filter"
import Loading from '../../components/Loading'
// ACTION CREATORS
import { getDogs, getFilterDogs } from '../../Redux/actions'
// STYLED COMPONENTS
import { Wrapper } from "./Dogs.styled"
// FUNCTIONS
import { az, za, MayMen, MenMay } from './Functions'

const Dogs =({DOGS,dispatch, loading, setLoading})=>{

    const navigate = useNavigate()
    const { dogs , filterDogs } = useSelector(state=>state.dogsReducer)
    const { temps } = useSelector(state=>state.tempReducer)
    

    let [search,setSearch] = useState('')
    let [currentPage,setCurrentPage] = useState(1)
    let [breedPerPage] = useState(8)

    let [errorMsg,setErrorMsg] =useState('')

    
    const indexOfLast = currentPage * breedPerPage
    const indexOfFirst = indexOfLast - breedPerPage
    const currentBreed = filterDogs.length?filterDogs.slice(indexOfFirst, indexOfLast):dogs.slice(indexOfFirst, indexOfLast)
    
    const handleSearch = async ()=>{
        setLoading(true)
        await Axios.get(`${DOGS}?name=${search}`)
        .then(res=>{
            setLoading(false)
            setErrorMsg('')
            setCurrentPage(1)
            dispatch(getDogs(res.data))
        })
        .catch(error=>{
            setLoading(false)
            dispatch(getDogs([]))
            setErrorMsg(error.response.data.msg)
        })
    }


    const handleBreed = async (e)=>{
        if(e.target.value === '--'){
            await Axios.get(DOGS).then(res=>{
                dispatch(getDogs(res.data))
            })
           dispatch(getFilterDogs([]))
        }else{
            setLoading(true)
            const filterDog = await dogs.filter(dog=>{
                if(dog.temperament){
                    let dogTemps = dog.temperament.split(', ')
                    return dogTemps.includes(e.target.value)
                }
                return false
            })
            dispatch(getFilterDogs(filterDog))
            setCurrentPage(1)
            setLoading(false)
        }
    }

    
    const handleOrigin = (e)=>{
        const { value } = e.target
        if( value === 'db' ){
            let dbDogs = dogs.filter(el=>el.database)
            dispatch(getFilterDogs(dbDogs))
        }
        if( value === 'api' ){
            let apiDogs =dogs.filter(el=>!el.database)
            dispatch(getFilterDogs(apiDogs))
        }
        if( value === '--' ){
            dispatch(getFilterDogs([]))
        }
    }
    
    
    const handleOrder = async (e)=>{
        const { value } = e.target
        setLoading(true)
        if( value === 'a-z' ){
            let sortedDogs =filterDogs.length?filterDogs.sort(az):dogs.sort(az)
            dispatch(getFilterDogs(sortedDogs))
        }
        if( value === 'z-a' ){
            let sortedDogs = filterDogs.length?filterDogs.sort(za):dogs.sort(za)
            dispatch(getFilterDogs(sortedDogs))
        }
        if( value === '--' ){
            if(filterDogs.length){
                let dbDog = filterDogs.filter(el=>el.database)
                dbDog.forEach(el=>{
                    let index = filterDogs.findIndex(el=>el.database)
                    filterDogs.splice(index,1)
                    filterDogs.unshift(el)
                })
                dispatch(getFilterDogs(filterDogs))
            }else{
                await Axios.get(DOGS)
                .then(res=>dispatch(getDogs(res.data)))
                dispatch(getFilterDogs([]))            
            }
        }
        setLoading(false)
    }


    const handleWeight = async (e)=>{
        const { value } = e.target

        setLoading(true)
        if(value === 'l-h'){
            let sortedWeight = filterDogs.length?filterDogs.sort(MayMen):dogs.sort(MayMen)
            dispatch(getDogs(sortedWeight))
        }
        if(value === 'h-l'){
            let sortedWeight = filterDogs.length?filterDogs.sort(MenMay):dogs.sort(MenMay)
            dispatch(getDogs(sortedWeight))
        } 
        if(value === '--'){
            if(filterDogs.length){
                let dbDog = filterDogs.filter(el=>el.database)
                dbDog.forEach(el=>{
                    let index = filterDogs.findIndex(el=>el.database)
                    filterDogs.splice(index,1)
                    filterDogs.unshift(el)
                })
                dispatch(getFilterDogs(filterDogs))
            }else{
                await Axios.get(DOGS).then(res=>dispatch(getDogs(res.data)))
                dispatch(getFilterDogs([]))
            }
        }
        
        setLoading(false)
    }

    const paginate = (number)=>setCurrentPage(number)

    return(
        <Wrapper>
            <Filter
                search={search}
                handleSearch={handleSearch}
                navigate={navigate}
                handleOrigin={handleOrigin}
                handleOrder={handleOrder}
                temps={temps}
                setSearch={setSearch}
                handleBreed={handleBreed}
                dogs={dogs}
                handleWeight={handleWeight}
            />
            <Pagination 
                breedsPerPage={breedPerPage}  
                totalBreeds={filterDogs.length || dogs.length} 
                paginate={paginate}
            />
            {loading?<Loading/>:<Breeds breeds={currentBreed} error={errorMsg}/>}
        </Wrapper>
    )
}

export default Dogs