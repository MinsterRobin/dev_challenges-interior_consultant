import styled from "styled-components";
import React from "react";
import {useSpring, animated, config} from 'react-spring';
import NavigationBarItem from "./NavigationBarItem";
import close_button from "../../assets/menu_white.svg";

const Layout = animated(styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;    
    z-index: 1;

    background-color: var(--color-background);
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`);

const CloseButton = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
    position: fixed;
    top: 21px;
    right: 20px; 
`;

const MobileMenu = (props) => {
    const springTransition = useSpring({
        transform: props.isMobileMenuOpen ? "translateX(0%)" : "translateX(100%)",
    });

    return (
        <Layout style={springTransition} isMobileMenuOpen={props.isMobileMenuOpen} >
            <CloseButton src={close_button} onClick={() => props.setIsMobileMenuOpen(!props.isMobileMenuOpen)}/>
            <NavigationBarItem isCurrentPage={true}>Home</NavigationBarItem>
            <NavigationBarItem>Collection</NavigationBarItem>
            <NavigationBarItem>About</NavigationBarItem>
            <NavigationBarItem>Contact</NavigationBarItem>
        </Layout>
    )
};

export default MobileMenu;