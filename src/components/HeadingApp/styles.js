import styled from "styled-components";

export const HeaderApp = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
    background-color: #FFFFFF;
    color: #495057;
`
export const DivLinks = styled.ul`
    width: 100%;
    max-width: 638px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
        a {
            font-size: 1.3rem;
            font-family: 'Open Sans', sans-serif;
            font-weight: 400;
            color: rgb(0,0,0,0.7);
            transition: all 0.3s ease;
            &:hover {
                color: red;
            }
        }
    }
    @media (max-width: 1150px) {
        display: none;
    }
`
export const DivBtn = styled.div`
    display: flex;
    button {
        border: none;
        margin-right: 2rem;
        padding: 1rem 3rem;
        border-radius: 120px;
        background-color: #343A40;
        font-family: 'Open Sans';
        font-size: 1.3rem;
        font-weight: 600;
        transition: all .3s ease;
        cursor: pointer;
        &:hover {
            background-color: #495057;
        }
    }
    div {
        display: flex;
        gap: 1rem;
    }
`
export const ContainerDiv = styled.div`
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    max-width: 124.6rem;
    margin: 0 auto;
    padding: 0 1.5rem;
`
