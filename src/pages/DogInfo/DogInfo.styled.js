import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    min-height: calc(100vh - 50px);
    background: var(--bg);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    > div{
        display: flex;
        padding: 15px;
        background: black;
        width: 80%;
        >img{
            height: 500px;
            width: 50%;
            object-fit: cover;
        }
        >div{
            width: 50%;
            p{
                color: white;
                display: flex;
                flex-wrap: wrap;
                align-items:center;
            }
            span{
                    background: grey;
                    padding: 5px;
                    border-radius: 5px;
                    margin: 5px 5px;
                }
            padding: 15px;
            p:nth-child(1){
                width: 100%;
                text-align: center;
                font-size: 2em;
                font-weight: bold;
            }
            p:nth-child(n+2):nth-child(-n+5){
                font-size: 1.2em;
                margin-top: 50px;
            }
        }
    }
    @media (max-width:1024px) {
        >div{
            width: 100%;
        }   
    }
    @media (max-width:769px) {
        >div{
            >img{
                height: 400px;
            }
            >div{
                p{
                    font-size: 0.8em;
                }
                span{
                    font-size: 0.8em;
                }
                p:nth-child(n+2):nth-child(-n+5){
                font-size: 1.2em;
                margin-top: 20px;
            }
            }
        }
    }
`