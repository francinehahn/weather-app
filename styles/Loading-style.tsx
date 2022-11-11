import styled from "styled-components"

export const LoadingSection = styled.div `
    margin: 15vh auto;
    border-radius: 50%;
    border: 8px solid var(--yellow);
    border-bottom: 8px solid var(--lightblue);
    width: 40px;
    height: 40px;
    @keyframes spinning {
        from {transform: rotate(0)}
        to {transform: rotate(360deg)}
    }
    animation: spinning .8s ease-out infinite;
`