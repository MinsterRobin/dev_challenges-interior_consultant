import styled from "styled-components";
import React from "react";

const NavigationItemSC = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    cursor: pointer;
    
    p { 
        align-self: center;
        font-family: var(--font-family-primary);
        font-size: var(--font-size-small);
        font-weight: ${props => props.isCurrentPage ? 700 : 500};
    }
    
    hr {
        position: absolute;
        bottom: 0;
        width: 100%;
    }
`;

const NavigationBarItem = (props) => {
    return(
        <NavigationItemSC isCurrentPage={props.isCurrentPage}>
            <p>{props.children}</p>
            {props.isCurrentPage && <hr/>}
        </NavigationItemSC>
    );
};

export default NavigationBarItem;