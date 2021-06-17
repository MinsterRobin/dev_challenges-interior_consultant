import {createGlobalStyle} from "styled-components";
import React from "react";

const GlobalStylesSC = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
    }

    html {
        --color-background: #181719;
        --color-text-primary: white;
        --color-text-secondary: #828282;
        --color-text-tertiary: #A9A9A9;
        
        --font-size-tiny: 10px;
        --font-size-very-very-small: 12px;
        --font-size-very-small: 14px;
        --font-size-small: 18px;
        --font-size-medium: 24px;
        --font-size-large: 48px;
        
        --font-family-primary: 'Montserrat', sans-serif;
        --font-family-secondary: 'Lora', serif;
        --font-family-tertiary: 'Crimson Pro', serif;
        
        --padding-size: 40px;
        
        background-color: var(--color-background);
        
        @media (max-width: 768px) {
            --font-size-large: 36px;

            --padding-size: 20px;
        }
    }
`;

const GlobalStyles = (props) => {
    return(
        <>
            <GlobalStylesSC/>
            {props.children}
        </>
    );
};

export default GlobalStyles;