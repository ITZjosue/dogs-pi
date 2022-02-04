import { Wrapper, Search, Input, Button, Text, SelectContainer} from "./Filter.styled"

const Form = ({search,handleSearch,navigate,handleOrigin,handleOrder,temps,setSearch,handleBreed,handleWeight})=>{

    return(
        <Wrapper>
            <div>
                <Search onSubmit={e=>e.preventDefault()}>
                        <Input 
                            type='text'
                            onChange={e=>setSearch(e.target.value)}
                            value={search}
                        />
                        <Button onClick={handleSearch} >Search</Button>
                </Search>

                <Button l={'10px'} onClick={()=>navigate('/add')} >Add a Dog</Button>
            </div>
            <SelectContainer>
                <div>
                    <Text>Temperament</Text>
                    <select onChange={handleBreed}>
                        <option>--</option>
                        {temps.map((temp)=>{
                            return(
                                <option key={temp.id}  >{temp.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <Text>Origin</Text>
                    <select onChange={handleOrigin} >
                        <option value='--'>--</option>
                        <option value='api' >Api</option>
                        <option value='db' >Databse</option>
                    </select>
                </div>
                <div>
                    <Text>A-Z</Text>
                    <select onChange={handleOrder} >
                        <option value='--' >--</option>
                        <option value='a-z' >A-Z</option>
                        <option value='z-a' >Z-A</option>
                    </select>
                </div>
                <div>
                    <Text>Weight</Text>
                    <select onChange={handleWeight}>
                        <option value='--' >--</option>
                        <option value='h-l' >Higher - Lower</option>
                        <option value='l-h' >Lower - Higher</option>
                    </select>
                </div>
            </SelectContainer>
        </Wrapper>
    )
}

export default Form