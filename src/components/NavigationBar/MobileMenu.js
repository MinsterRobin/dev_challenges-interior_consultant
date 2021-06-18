import styled from "styled-components";
import React from "react";
import {useSpring, animated} from 'react-spring';
import NavigationBarItem from "./NavigationBarItem";
import close_button from "../../assets/close_button_white.svg";

const Layout = animated(styled.div`
    display: none;
    
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;    
    z-index: 1;

    background-color: var(--color-background);
    
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    
    @media (max-width: 768px) {
        display: flex;
    }
`);

const CloseButton = styled.img`
    width: 25px;
    height: 25px;
    cursor: pointer;
    position: fixed;
    top: 25px;
    right: 25px;
    
    transition: opacity ease-in-out 80ms;
    
    &:hover {
        opacity: 0.7;
    }
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