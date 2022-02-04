import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 50px);
    background: url(https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
    background-size: cover;
    overflow: hidden;
    @media (max-width: 1024px) {
        background-position: center;
    }
`

export const HuesoContenedor = styled.button`
    width: 700px;
    height: 300px;
    position: relative;
    top: 50%; 
    left: 50%;
    transform: translate(-50%,-50%);
    background: none;
    border: none;
    cursor: pointer;
    :hover{
        animation: tremble forwards 1s;
    
        @keyframes tremble {
            0%{
                transform:translate(-50%,-50%) rotate(0deg);
            }
            25%{
                transform:translate(-50%,-50%) rotate(15deg);
            }
            75%{
                transform:translate(-50%,-50%) rotate(-15deg);
            }
            100%{
                transform:translate(-50%,-50%) rotate(0deg);
            }
        }
    }
    @media (max-width:768px) {
        width: 600px;
    }
    @media (max-width:425px) {
        width: 100%;
    }
`

export const Title = styled.h1`
    font-size: 2.5em;
    padding: 15px 80px;
    background: #f0f7de;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    @media (max-width:425px) {
        font-size: 0.8em;
    }
`

export const Circle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #f0f7de;
    position: absolute;
    top: ${props=>props.top || '25%'};
    left: ${props=>props.left || '17%'};
    @media (max-width:425px) {
        width: 60px;
        height: 60px;
        top: ${props=>props.top || '30%'};
    }
`