import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Layout from "./Layout";
import Footer from "../../components/Footer";
import styled from "styled-components";

const HeroLayout = styled.div`
    flex: 1;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const InfosLayout = styled.div`
    flex: 1;
    
    display: flex;
    flex-direction: column;
    
    gap: 45px;
`;

const Title = styled.p`
    font-family: var(--font-family-secondary);
    font-size: var(--font-size-large);
    font-weight: 500;
`;

const Presentation = styled.p`
    font-family: var(--font-family-primary);
    font-size: var(--font-size-medium);
    font-weight: 400;
`;

const ReadMore = styled.p`
    font-family: var(--font-family-primary);
    font-size: var(--font-size-small);
    font-weight: 700;
`;

const GraphicsLayout = styled.div`
    flex: 2;
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

                </GraphicsLayout>
            </HeroLayout>
            <Footer/>
        </Layout>
    );
}

export default Index;
