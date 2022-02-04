import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    background: black;
    padding: 20px 5px;
    position: relative;
    @media (max-width:1024px) {
        display: flex;
        flex-direction: column;
    }
    @media (max-width:425px) {
        display: block;
        flex-direction: none;
        padding: 20px 0;
    }
`

export const Search = styled.form`
    font-size: 1em;
    position: absolute;
    right: 0;
    padding-right:15px;
    display: flex;
    align-items: center;
    @media (max-width:425px) {
        position: relative;
        padding-bottom: 20px;
    }
`

export const Input = styled.input`
    padding: 5px;
    width: 200px;
    border-radius: 5px;
    background: none;
    color: white;
    border: solid 1px white;
    margin-right: 10px;
    @media (max-width:680px) {
        width: 100%;
    }
`
export const Button = styled.button`
    padding: 7px 25px;
    background: grey;
    color: white;
    border: none;
    cursor: pointer;
    margin-left: ${props=>props.l || 'none'};
    transition: 0.5s all;
    :hover{
        background: #c2c7c9;
    }
`
export const Text = styled.p`
    color: white;
    @media (max-width:680px) {
        font-size: 1em;
    }
`

export const SelectContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 600px;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    div{
        select{
            width: 140px;
            padding: 3px;
            background: grey;
            color:white;
        }
    }
    @media (max-width: 1024px) {
        width: 90%;
        position: relative;
        top: 100%;
        margin-top: 50px;
    }
    @media (max-width:680px) {
        width: 100%;
        margin-top: 50px;
        div{
            select{
                width: 90px;
            }
        }
    }
    @media (max-width:425px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
        margin-top: 110px;
        >div{
            margin: 5px 0;
            width: auto;
            text-align: center;
            >select{
                width: 200px;
            }
        }
    }
`