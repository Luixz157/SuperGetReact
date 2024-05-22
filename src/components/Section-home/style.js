//Bolo medio, Chocolate, para sabado entregar

import styled from "styled-components";

export const Sect = styled.div`
overflow: hidden;
    position: relative;
    padding: 9rem 0 0 0;
    width: 100%;
    background-color: #F22824;
`
export const BgLinear = styled.div`
    z-index: 1;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(102,44,98,0) 0%, rgba(102,44,98,1) 100%);
`
export const SectContent = styled.div`
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6rem;
    @media (max-width: 1200px) {
        flex-direction: column;
    }
`
export const Left = styled.div`
    padding-bottom: 5rem;
    width: 100%;
    max-width: 50%;
    h1 {
        font-family: 'Open Sans', sans-serif;
        color: #FFFFFF;
        font-size: 6.9rem;
        font-weight: 700;
        margin-bottom: 3rem;
    }
    span {
        text-decoration: #FFE211 line-through;
        font-size: 1.6rem;
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
    }
    h2 {
        font-size: 5.6rem;
        font-weight: 700;
        color: #FFE211;
        margin: 1rem 0 2rem 0;
    }
    p {
        font-size: 1.6rem;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        strong {
            font-weight: 600;
        }
    }
    div {
        width: 100%; 
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 4rem 0 1.5rem 0;
        button {
            width: 100%;
            max-width: 228px;
            border: none;
            padding: 1rem 6rem;
            border-radius: 120px;
            color: #F22824;
            background-color: #FFFFFF;
            font-size: 1.6rem;
            font-family: 'Open Sans', sans-serif;
            font-weight: 700;
            transition: all .3s ease;
            cursor: pointer;
            &:hover {
                border: 1px solid white;
                color: #FFFFFF;
                background: linear-gradient(180deg, rgba(102,44,98,0) 0%, rgba(102,44,98,1) 100%);
            }
        }
        div {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: end;
            margin: 0;
        }
    }
    @media (max-width: 1200px) {
        max-width: 100%;
    }
    @media (max-width: 700px) {
        flex-direction: column;
        text-align: center;
        h1 {
            text-align: center;
        }
        div {
            flex-direction: column;
            button {
                margin-bottom: 2rem;
            }
            .dowloadApp {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
            }
        }
    }
`
export const Right = styled.div`
    display: flex;
    width: 100%;
    @media (max-width: 700px) {
        flex-direction: column;
    }
`
export const Heading3 = styled.p `
    font-family: 'Open Sans', sans-serif;
    font-size: 1.6rem;
`
export const RLeft = styled.div`
    width: 100%;
    position: relative;
    .Machine {
        z-index: 3;
        position: relative;
        top: 40px;
    }
    .Pontin {
        z-index: 1;
        position: absolute;
        top: 20px;
        right: -28px;
    }
    .Sombra {
        left: 50px;
        z-index: 2;
        position: absolute;
        top: 180px;
    }
    @media (max-width: 700px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        .Sombra {
            left: 171px;
            top: 66px;
        }
        .Pontin {
            right: 0;
        }
    }
`
export const RRight = styled.div`
    width: 100%;
    padding-left:7rem ;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    h2 {
        font-size: 4.8rem;
        font-weight: 800;
        font-family: 'Open Sans', sans-serif;
        margin-bottom: 1rem;
    }
    h3 {
        max-width: 100px;
        font-size: 1.6;
        font-weight: 600;
        font-family: 'Open Sans', sans-serif;
        margin-bottom: 4rem;
    }
    ul {
        margin-bottom: 4rem;
        li {
            width: 100%;
            max-width: 150px;
            &:not(:last-child) {
                margin-bottom: 1rem;
            }
            &::marker {
                width: 5px;
                height: 5px;
                color: #FFEA0D;
            }
            p {
                font-size: 1.6rem;
                font-family: 'Open Sans', sans-serif;
                font-weight: 400;
            }
        }
    }
    div {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: left;
        width: 100%;
        height: 100%;
        .Bg-Date {
            z-index: 1;
            border-radius: 0 25px 0 0;
            top: 0;
            right: 0;
            position: absolute;
            width: 400px;
            height: 100%;
            background-color: #97233A;
        }
        .Info-Date {
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            z-index: 2;
            p {
                font-size: 1.6rem;
                font-weight: 400;
                font-family: 'Open Sans', sans-serif;
                margin-left: 1rem;
                max-width: 110px;
                span {
                    font-weight: 600;
                }
            }
        }
    }
    @media (max-width: 1200px) {
        margin-top: 4rem;
        padding-left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        ul {
            text-align: center;
            li {
                list-style: none;
            }
        }
        div {
            width: 100%;
            max-width: 100%;
            .Bg-Date {
                width: 100%;
                max-width: 100%;
                border-radius: 25px 25px 0 0;
            }
            .Info-Date {
                padding: 25px;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                img {
                    margin-bottom: 2rem;
                }
                p {
                    max-width: 100%;
                }
            }
        }
    }
`
export const BallYellow = styled.div`
    top: 40px;
    left: -40px;
    position: absolute;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 104px;
    height: 104px;
    background: linear-gradient(180deg, rgba(255,234,13,1) 0%, rgba(255,193,32,1) 100%);
    p {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
        color: #343A40;
        span {
            font-weight: 600;
            color: #343A40;
        }
    }
    @media (max-width: 700px) {
        top: 0;
        left: 0;
    }
`