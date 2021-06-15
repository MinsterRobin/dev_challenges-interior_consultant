import styled from "styled-components";

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    
    min-height: 100vh;
    max-width: 1680px;
    margin: auto;
    padding: var(--padding-size);
    
    background-color: var(--color-background);
    color: var(--color-text-primary);
`;

export default Layout;