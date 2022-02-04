import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 50px);
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    >div{
        height: 85vh;
        width: 300px;
        >img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    @media (max-width:1025px) {
        >div{
            height: 90%;
        }
    }
    @media (max-width:768px) {
        >div{
            display: none;
        }
    }
`

export const Form = styled.form`
    width: 550px;
    height: 85vh;
    color: white;
    background: #A4A5A5;
    background-size: cover;
    background-position: center;
    border:solid 1px #00FE81;
    @media (max-width:1025px) {
        height: 90%;
    }
    @media (max-width:425px) {
        width: 100%;
    }
`

export const InnerForm = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    padding: 25px;
    padding-top: 15px;
    button{
        border: none;
        padding: 5px;
        font-size: 1.2em;
        font-weight: 600;
        margin-top: 15px;
        width: 100%;
        background: #4e504e;
        color: white;
        cursor: pointer;
        border: solid 1px var(--verde);
        transition: 0.5s all;
        :hover{
            background: var(--verde);
        }
    }
    @media (max-width:1025px) {
        >button{
            margin-top: 5px;
        }       
    }
`

export const Title = styled.h1`
    width: 100%;
    text-align: center;
    margin-bottom: 15px;
    @media (max-width:1025px) {
        font-size: 1.2em;
    }
`
export const Label = styled.label`
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.3em;
    @media (max-width:1025px) {
        font-size: 1em;
    }
`

export const InputContainer = styled.div`
    width: ${props=>props.width || 'auto' };
    display: flex;
    justify-content: ${props=>props.justify || 'none'};
    flex-direction:${props=>props.direction || 'row'};
`

export const Input = styled.input`
    padding: 6px;
    width: ${props=>props.len || '70%'};
    background: black;
    border: solid 1px transparent;
    color:white;
    transition: 0.5s all;
    outline: none;
    :focus{
        border: solid 1px var(--verde);
    }
    @media (max-width:500px) {
        width: ${props=>props.res || '100px'};
    }
`

export const TempContainer = styled.div`
    width: 100%;
    padding-top: 15px;
    position: relative;
    @media (max-width:1025px) {
        padding-top: 0px;
        >h2{
            font-size: 1em;
        }
    }
`

export const SelectContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    @media (max-width:1025px) {
        position: absolute;
        width: 50%;
        right: 15%;
        top: 0px;
        padding: 5px;
    }
    @media (max-width:500px) {
        position: absolute;
        width: 60%;
        right: 15%;
        top: 0px;
        padding: 5px;
        right: 0;
    }
`
export const Select = styled.select`
    width: 150px;
    padding: 5px;
    text-align: center;
    color: white;
    background:#4e504e;
    border: solid 1px white;
    ::-webkit-scrollbar{
        width: 10px;
        background:none;
        border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb{
        background:white;
        border-radius: 5px;
    }
    :focus{
        border:solid 1px var(--verde);
    }
    @media (max-width:1025px){
        width: 300px;
        padding: 3px;
    }
    @media (max-width:500px) {
        width: 100%;
    }

`

export const OptionSelected = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
    ::-webkit-scrollbar-thumb{
        background: red;
    }
    div{
        background:rgba(0,0,0,0.5);
        width: auto;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        font-size: 1em;
        border-radius: 5px;
        margin: 3px 5px;
    }
    span{
        font-size: 0.7em;
        padding: 5px 5px 5px 5px;
        border:solid white 1px;
        margin-left: 7px;
        cursor: pointer;
        :hover{
            background: white;
            color: black;
        }
    }

    @media (max-width:1025px) {
        height: 70px;
        margin-top: 15px;
        height: 135px;
    }
`

export const ErrorMsg = styled.p`
    text-align: center;
    color: var(--verde);
    width: ${props=>props.len || '100%'};
    height: ${props=>props.hei || '20px'};
    @media (max-width:500px) {
        font-size: 0.9em;
    }
`

export const ErrorContainer = styled.div`
    width: 68.5%;
    margin-left: 30.5%;
    display: flex;
    justify-content:space-between;
`