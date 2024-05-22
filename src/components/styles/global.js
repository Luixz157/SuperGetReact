import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Lato', sans-serif;
        box-sizing: border-box;
        color: white;
    }

    body {
        background-color: #FFFFFF;
    }

    html {
        font-size: 62.5%;
    }

    img {
        max-width: 100%;
        display: block;
    }
    a {
        list-style: none;
        text-decoration: none;
    }

    /*
    ::-webkit-scrollbar {
        width: 15px;
        background-color: #F0F0F0;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #F22824;
    }
    */
`
export default GlobalStyle
