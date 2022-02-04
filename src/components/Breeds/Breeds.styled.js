import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding:15px 0;
    margin-bottom: 5px;
    h1{
        color: white;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100vh - 50px);
    }
`

export const DogLink = styled(Link)`
    padding: 5px;
    width: 250px;
    height: 400px;
    margin: 15px;
    border-radius: 10px;
    text-decoration: none;
    color: white;
    transition: 0.5s all;
    border: solid 1px transparent;
    :hover{
        color: var(--verde);
    }
`

export const DogImgContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    :hover{
        filter: none;
    }
`

export const ImgDog = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`

export const InfoContainer = styled.div`
    height: 50%;
    width: 100%;
    position: relative;
`

export const Info = styled.p`
    padding: 8px;
    margin: 10px 0;
    width:auto;
    font-size: 1em;
    text-align: center;
    border-radius: 10px;
`