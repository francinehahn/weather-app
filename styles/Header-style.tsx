import styled from "styled-components"

export const HeaderStyle = styled.header `
    height: 8vh;
    background-color: var(--lightblue);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2vw;
    padding: 0 4vw;
    a {
        color: white;
        font-size: 16px;
        :hover {
            color: #efefef;
        }
    }
`