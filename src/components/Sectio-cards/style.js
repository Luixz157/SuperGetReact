import styled from "styled-components";

export const SCard = styled.div`
    position: relative;
    .LeftDivCard {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        max-width: 184px;
        .ContentInfoCard {
            h3 {
                font-family: 'Open Sans', sans-serif;
                font-weight: 700;
                font-size: 4.8rem;
                color: #DC292E;
            }
            h4 {
                font-family: 'Open Sans', sans-serif;
                font-weight: 600;
                font-size: 1.8rem;
                color: #343A40;
            }
            p {
                font-family: 'Open Sans', sans-serif;
                font-weight: 400;
                font-size: 1.4rem;
                color: #495057;
                max-width: 100px;
            }
        }
        .Line {
            margin-left: 6rem;
            .Gray {
                margin: 0 auto;
                background-color: #ADB5BD;
                width: 1px;
                height: 60px;
            }
            .RedBall {
                margin: 1rem auto;
                background-color: #B22A41;
                width: 6px;
                height: 6px;
                border-radius: 50%;
            }
        }
    }
    .RightDivCard {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        h4 {
            font-family: 'Open Sans', sans-serif;
            font-weight: 600;
            font-size: 1.8rem;
            color: #343A40;
        }
        ul {
            width: 100%;
            max-width: 62.0rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            li {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                max-width: 140px;
                p {
                    text-align: center;
                    font-size: 1.6rem;
                    font-weight: 400;
                    font-family: 'Open Sans';
                    color: #495057;
                    span {
                        font-size: 1.6rem;
                        font-weight: 600;
                        font-family: 'Open Sans';
                        color: #495057;
                    }
                }
            }
        }
    }
    .redLine {
        position: absolute;
        bottom: 0;
        right: 0;
        height: 2px;
        width: 79%;
        border-bottom: 1px solid #F22824;
    }
    @media (max-width: 700px) {
        .ContentInfoCard  {
            text-align: center;
        }
        .LeftDivCard {
            width: 100%;
            max-width: 100%;
            flex-direction: column;
            .Line {
                margin: 3rem 0;
                margin-left: 0;
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                .Gray {
                    width: 100%;
                    height: 1px;
                }
                .RedBall {
                    margin: 0 3rem;
                    width: 25px;
                    height: 12px;
                }
            }
        }
        .RightDivCard {
            flex-direction: column;
            ul {
                flex-direction: column;
                li {
                    margin: 3rem 0;
                }
            }
        }
    }
`
export const ContentCard = styled.div`
    padding: 6rem 0;
    display: flex;
    @media (max-width: 700px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`