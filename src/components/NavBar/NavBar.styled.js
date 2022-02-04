import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
    width: 100%;
    height: 50px;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: solid 1px var(--verde);
`

export const Anchor = styled(Link)`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    text-decoration: none;
    color: white;
    transition: 0.5s all;
    :hover{
        background: var(--verde);
    }
`