import { Wrapper , Page } from "./Pagination.styled"

const Pagination = ({ breedsPerPage, totalBreeds, paginate })=>{

    const pageNumbers = []

    for( let i = 1;i <= Math.ceil(totalBreeds/breedsPerPage);i++ ){
         pageNumbers.push(i)
    }
    
    return(
        <Wrapper>
            {pageNumbers.map(number=>{
                return(
                    <Page onClick={()=>paginate(number)}  key={number}>
                        {number}
                    </Page>
                )
            })}
        </Wrapper>
    )
}
export default Pagination