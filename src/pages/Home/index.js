import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Layout from "./Layout";
import Footer from "../../components/Footer";
import styled from "styled-components";
import interior_photo from "../../assets/photo1.png";
import profile_picture from "../../assets/photo2.png";

const HeroLayout = styled.div`
    flex: 1;
       
    display: grid;
    grid-template-columns: 35% 55%;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    
    @media (max-width: 768px) {
        display: block;
    }
`;

const InfosLayout = styled.div`
    min-width: min-content;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    gap: 45px;
`;

const Title = styled.p`
    min-width: max-content;
    font-family: var(--font-family-secondary);
    font-size: var(--font-size-large);
    font-weight: 500;
`;

const Presentation = styled.p`
    font-family: var(--font-family-primary);
    font-size: var(--font-size-medium);
    font-weight: 400;
    
    @media (max-width: 992px) {
        font-size: var(--font-size-very-small);
    }
`;

const ReadMore = styled.p`
    font-family: var(--font-family-primary);
    font-size: var(--font-size-small);
    font-weight: 700;
    
    @media (max-width: 992px) {
        font-size: var(--font-size-very-small);
    }
`;

const GraphicsLayout = styled.div`
    position: relative;
`;

const InteriorImage = styled.img`
    width: 100%;
`;

const ProfileCardLayout = styled.div`
    position: absolute;
    bottom: -5rem;
    left:40%;
    right: 2rem;
    background-color: var(--color-background);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    padding: 2rem;
   
`;

const ProfileCardSubLayout = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    max-width: 410px;
    
    margin-bottom: 1rem;
        
    div {
        margin-left: 10px;
        display: flex;
        height: 100%;
        flex-direction: column;
        align-content: space-between;
        justify-content: space-between;
    }
`;

const ProfileCardImage = styled.img`
    max-width: 40px;
    border-radius: 50%;
`;

const ProfileCardH2 =styled.p`
    font-family: var(--font-family-primary);
    font-size: var(--font-size-very-small);
    font-weight: 500;
    
    @media(max-width: 992px) {
        font-size: var(--font-size-very-very-small);
    }
`;

const ProfileCardH3 = styled.p`
    font-family: var(--font-family-primary);
    font-size: var(--font-size-very-very-small);
    font-weight: 500;
    color: var(--color-text-secondary);
    
    @media(max-width: 992px) {
        font-size: var(--font-size-tiny);
    }
`;

const ProfileCardH1 = styled.p`
    font-family: var(--font-family-secondary);
    font-size: var(--font-size-medium);
    font-weight: 700;
    
    @media(max-width: 992px) {
        font-size: var(--font-size-small);
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
                    <ReadMore>Read More =></ReadMore>
                </InfosLayout>

                <GraphicsLayout>
                    <InteriorImage src={interior_photo} alt="Interior Photo"/>
                    <ProfileCardLayout>
                        <ProfileCardSubLayout>
                            <ProfileCardImage src={profile_picture} alt={"Profile Picture"}/>
                            <div>
                                <ProfileCardH2>Aliza Webber</ProfileCardH2>
                                <ProfileCardH3>Interior Designer</ProfileCardH3>
                            </div>
                        </ProfileCardSubLayout>
                        <ProfileCardH1>Designed in 2020 by Aliza Webber</ProfileCardH1>
                    </ProfileCardLayout>
                </GraphicsLayout>
            </HeroLayout>
            <Footer/>
        </Layout>
    );
}

export default Index;
