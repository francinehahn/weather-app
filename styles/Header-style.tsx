import styled from "styled-components"

export const HeaderStyle = styled.header `
    height: 10vh;
    background-color: var(--lightblue);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2vw;
    padding: 0 5vw;
    div {
        :nth-child(1) {
            display: flex;
            align-items: center;
            gap: 1vw;
            h1 {
                font-family: 'Montserrat', 'sans-serif';
                font-size: 21px;
                color: #fff;
            }
        }

        :nth-child(2) {
            display: flex;
            flex-direction: column;
            gap: .5vh;
            p {
                font-family: 'Montserrat', 'sans-serif';
                font-size: 16px;
                text-align: center;
                color: #fff;
            }
        }
    }
`