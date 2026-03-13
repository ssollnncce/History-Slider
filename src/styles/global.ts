import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --blue: #5D5FEF;
        --pink: #EF5DA8;
        --year-blue: #3877EE;
        --grid: rgba(48, 62, 88, 0.5);
        --black-blue: #42567A;
    }
    * { box-sizing: border-box; }
    body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: #f3f8fb;
        color: #2a3b4d;
        overflow-x: hidden;
        padding-left: 20rem;
        padding-right: 10rem;
        width: 100vw;
        height: 100vh;

        @media (max-width: 768px) {
            padding: 0;
        }
    } 
  `;
