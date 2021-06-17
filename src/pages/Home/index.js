import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Layout from "./Layout";
import Footer from "../../components/Footer";
import styled from "styled-components";
import interior_photo from "../../assets/photo1.png";
import arrow_right_white from "../../assets/arrow_right_alt_white_24dp.svg";
import ProfileCard from "../../components/ProfileCard";

const HeroLayout = styled.div`
    flex: 1;
       
    display: grid;
    grid-template-columns: 35% 55%;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    row-gap: 2rem;
    
    margin-bottom: 6rem;
    
    @media (max-width: 992px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

const InfosLayout = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    gap: 3rem;
    
    @media (max-width: 768px) {
        gap: 1.5rem;
    }
`;

const ArrowRight = styled.img`
    margin-left: 10px;
    width: 20px;
    position: relative;
    cursor: pointer;
`;

const Title = styled.p`
    min-width: max-content;
    font-family: var(--font-family-secondary);
    font-size: var(--font-size-large);
    font-weight: 500;
    
    @media (max-width: 768px) {
        min-width: auto;
    }
`;

const Presentation = styled.p`
    font-family: var(--font-family-primary);
    font-size: var(--font-size-medium);
    font-weight: 400;
    
    @media (max-width: 768px) {
        font-size: var(--font-size-very-small);
    }
`;

const ReadMore = styled.p`
    font-family: var(--font-family-primary);
    font-size: var(--font-size-small);
    font-weight: 700;
    
    @media (max-width: 768px) {
        font-size: var(--font-size-very-small);
    }
`;

const GraphicsLayout = styled.div`
    position: relative;
`;

const InteriorImage = styled.img`
    width: 100%;
`;

const ProfileCardContainer = styled.div`
    position: absolute;
    bottom: -5rem;
    right: 2rem;
    
    @media (max-width: 992px) {
        margin-left: 1rem;
        right: 1rem;
    }  
`;

function Index() {
    return (
        <Layout>
            <NavigationBar/>
            <HeroLayout>
                <InfosLayout>
                    <Title>Modern interior</Title>
                    <Presentation>A full-Service residential & commercial interior design and staging company offering professional organizing & eco-services.</Presentation>
                    <ReadMore>Read More <ArrowRight src={arrow_right_white}/></ReadMore>
                </InfosLayout>

                <GraphicsLayout>
                    <InteriorImage src={interior_photo} alt="Interior Photo"/>
                    <ProfileCardContainer>
                        <ProfileCard/>
                    </ProfileCardContainer>
                </GraphicsLayout>
            </HeroLayout>
            <Footer/>
        </Layout>
    );
}

export default Index;
