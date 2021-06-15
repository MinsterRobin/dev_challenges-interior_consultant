import styled from "styled-components";
import React from "react";
import Logo from "../Logo";
import NavigationBarItem from "./NavigationBarItem";

const LayoutSC = styled.header`
    background-color: var(--color-background);
    color: var(--color-text-primary);
    width: 100%;
    
    display: flex;
    justify-content: space-between;
`;

const NavigationItemsLayout = styled.div`
    width: 550px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavigationBar = () => {
    return(
        <LayoutSC>
            <Logo />
            <NavigationItemsLayout>
                <NavigationBarItem isCurrentPage={true}>Home</NavigationBarItem>
                <NavigationBarItem>Collection</NavigationBarItem>
                <NavigationBarItem>About</NavigationBarItem>
                <NavigationBarItem>Contact</NavigationBarItem>
            </NavigationItemsLayout>
        </LayoutSC>
    );
};

export default NavigationBar;