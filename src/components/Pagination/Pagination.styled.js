import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 15px;
`

export const Page = styled.span`
    padding: 5px;
    font-size: 1em;
    color: var(--verde);
    border:solid var(--verde) 2px;
    margin: 5px 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.5s all;
    :hover{
        background: var(--verde);
        color: black;
    }
`