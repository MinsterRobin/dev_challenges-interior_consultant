import styled from "styled-components";
import React from "react";

const LogoSC = styled.div`
    color: var(--color-text-primary);
    
    font-family: var(--font-family-tertiary);
    font-weight: 200;
    font-size: var(--font-size-very-small);
    
    border: 1px solid var(--color-text-primary);
    padding: 8px;
`;

const Logo = () => {
    return(
        <LogoSC>THIS INTERIOR</LogoSC>
    );
};

export default Logo;