import styled from "styled-components";

const Layout = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    
    min-height: 100vh;
    width: 100%;
    max-width: 1680px;
    margin: auto;
    padding: var(--padding-size);
    
    background-color: var(--color-background);
    color: var(--color-text-primary);
`;

export default Layout;