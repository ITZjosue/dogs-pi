// HOOKS
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { useEffect } from "react"
// STYLED COMPONENT
import { Wrapper } from "./DogInfo.styled"
// COMPONENT
import Loading from "../../components/Loading"
// FUNCTIONS
import { getDog } from './Functions'

const DogInfo = ({ dispatch,loading,setLoading })=>{
    const { idDog } = useParams() 

    const { infoDog } = useSelector(state=>state.dogsReducer)

    useEffect(()=>{
        getDog(idDog,dispatch,setLoading)
    },[dispatch,idDog,setLoading])

    if(loading){
        return <Loading/>
    }else{
        return(
            <Wrapper>
                <div>
                    <img alt="dog" src={infoDog.img} width={'200px'} height={'200px'}/>
                    <div>
                        <p>{infoDog.name}</p>
                        <p>Temperament: {infoDog.temperament?infoDog.temperament.split(', ').map((temp,index)=>{
                                return(
                                    <span key={index}>
                                        {temp}
                                    </span>
                                )
                            }):''}
                        </p>
                        <p>Height: <span>{infoDog.height} cm</span></p>
                        <p>Weight: <span>{infoDog.weight} Kg</span></p>
                        <p>Life Span: <span>{infoDog.life_span}</span></p>
                    </div>
                </div>
            </Wrapper>
        )
    }

}

export default DogInfo