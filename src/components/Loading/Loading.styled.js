import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 50px);
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--bg);
    >div{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: solid var(--verde) 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: load 1.2s infinite;
        animation-timing-function: linear;
        position: relative;
        @keyframes load {
            from{
                transform: rotate(0deg);
            }
            to{
                transform: rotate(360deg);
            }
        }
        >div{
            width: 30px;
            height: 30px;
            background: black;
            border-radius: 50%;
            position: absolute;
            top: -20%;
            left: 50%;
            transform: translateX(-50%);
        }
    }
`