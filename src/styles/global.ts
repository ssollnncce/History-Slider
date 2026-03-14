import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "PT Sans";
        src: url("./assets/fonts/PT_Sans/PTSans-Regular.ttf") format("truetype");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "PT Sans";
        src: url("./assets/fonts/PT_Sans/PTSans-Italic.ttf") format("truetype");
        font-weight: 400;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: "PT Sans";
        src: url("./assets/fonts/PT_Sans/PTSans-Bold.ttf") format("truetype");
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "PT Sans";
        src: url("./assets/fonts/PT_Sans/PTSans-BoldItalic.ttf") format("truetype");
        font-weight: 700;
        font-style: italic;
        font-display: swap;
    }

    :root {
        --blue: #5D5FEF;
        --pink: #EF5DA8;
        --year-blue: #3877EE;
        --grid: rgba(48, 62, 88, 0.5);
        --black-blue: #42567A;
    }
    * { box-sizing: border-box; font-family: inherit; }
    body {
        margin: 0;
        font-family: "PT Sans", sans-serif;
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
