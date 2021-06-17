import React from "react";
import styled from "styled-components";
import profile_picture from "../assets/photo2.png";

const Layout = styled.div`
    max-width: max-content;
    background-color: var(--color-background);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    padding: 2rem;
    
    @media (max-width: 992px) {
        padding: 1rem;
    }  
`;

const SubLayout = styled.div`
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

const ProfilePicture = styled.img`
    max-width: 40px;
    border-radius: 50%;
`;

const H2 =styled.p`
    font-family: var(--font-family-primary);
    font-size: var(--font-size-very-small);
    font-weight: 500;
    
    @media(max-width: 992px) {
        font-size: var(--font-size-very-very-small);
    }
`;

const H3 = styled.p`
    font-family: var(--font-family-primary);
    font-size: var(--font-size-very-very-small);
    font-weight: 500;
    color: var(--color-text-secondary);
    
    @media(max-width: 992px) {
        font-size: var(--font-size-tiny);
    }
`;

const H1 = styled.p`
    font-family: var(--font-family-secondary);
    font-size: var(--font-size-medium);
    font-weight: 700;
    
    @media(max-width: 992px) {
        font-size: var(--font-size-small);
    }
`;

const ProfileCard = () => {
    return(
        <Layout>
            <SubLayout>
                <ProfilePicture src={profile_picture} alt={"Profile Picture"}/>
                <div>
                    <H2>Aliza Webber</H2>
                    <H3>Interior Designer</H3>
                </div>
            </SubLayout>
            <H1>Designed in 2020 by Aliza Webber</H1>
        </Layout>
    );
};

export default ProfileCard;