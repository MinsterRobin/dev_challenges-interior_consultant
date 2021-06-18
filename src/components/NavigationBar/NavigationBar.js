import styled from "styled-components";
import React, {useState} from "react";
import Logo from "../Logo";
import NavigationBarItem from "./NavigationBarItem";
import hamburger_menu from "../../assets/menu_white.svg";
import MobileMenu from "./MobileMenu";

const Layout = styled.header`
    background-color: var(--color-background);
    color: var(--color-text-primary);
    width: 100%;
    
    display: flex;
    justify-content: space-between;
    
    margin-bottom: 3rem;
`;

const HamburgerMenu = styled.img`
    display: none;
    
    width: 30px;
    align-self: center;
    cursor: pointer;    
        
    transition: opacity ease-in-out 80ms;
    
    &:hover {
        opacity: 0.7;
    }
    
    @media (max-width: 768px) {
        display: initial;
    }
`;

const NavigationItemsLayout = styled.div`
    width: 550px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width: 768px) {
        display: none;
    }
`;

const NavigationBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    return(
        <Layout>
            <Logo />
            <HamburgerMenu src={hamburger_menu} alt={"Hamburger Menu"} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}/>

            <MobileMenu isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen}/>

            <NavigationItemsLayout>
                <NavigationBarItem isCurrentPage={true}>Home</NavigationBarItem>
                <NavigationBarItem>Collection</NavigationBarItem>
                <NavigationBarItem>About</NavigationBarItem>
                <NavigationBarItem>Contact</NavigationBarItem>
            </NavigationItemsLayout>
        </Layout>
    );
};

export default NavigationBar;