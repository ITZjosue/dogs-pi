import { Wrapper, Anchor } from "./NavBar.styled"

const NavBar = ()=>{
    return(
        <Wrapper>
            <Anchor to={'/'} ><span>Home</span></Anchor>
            <Anchor to={'/dogs'} ><span>Dogs</span></Anchor>
        </Wrapper>
    )
}
export default NavBar