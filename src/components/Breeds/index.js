import { Wrapper, DogLink, ImgDog , DogImgContainer , InfoContainer, Info} from './Breeds.styled'

const Breeds = ({breeds,error})=>{

    if(error){
        return(
            <Wrapper>
                <h1>{error}</h1>
            </Wrapper>
        )
    }else{
        return (
            <Wrapper>
                {breeds.map(breed=>{
                    return (
                    <DogLink key={breed.id} to={`/dogs/${breed.id}`}>
                        <DogImgContainer>
                            <ImgDog src={breed.img} alt='dog'/>
                        </DogImgContainer>
                        <InfoContainer>
                            <Info>Name : {breed.name}</Info>
                            {breed.temperament?<Info>Temperament: {breed.temperament}</Info>:''}
                            <Info>Weight: {breed.weight} Kg</Info>
                        </InfoContainer>
                    </DogLink>
                    )
                })}
            </Wrapper>
        )
    }

}
export default Breeds