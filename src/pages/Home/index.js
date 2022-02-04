import { Wrapper , Title , HuesoContenedor, Circle } from './Home.styled'
import { useNavigate } from 'react-router-dom'

const Home = ({ dogs })=>{
    
    const navigate = useNavigate()

    return(
        <Wrapper>
            <HuesoContenedor name='continue' onClick={()=>navigate(dogs)}>

                    <Title>DOGS PI</Title>
                    <Circle/>
                    <Circle top={'48%'}/>
                    <Circle left={'69%'}/>
                    <Circle left={'69%'} top={'48%'}/>
            </HuesoContenedor>
        </Wrapper>
    )
}

export default Home