import styled from "styled-components"

export const Container = styled.section `
    background-color: var(--lightblue);
    height: 92vh;
    form {
        width: 100vw;
        height: 6vh;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .5vw;
        background-color: #fff;
        label {
            font-size: 18px;
        }
        select {
            border: none;
            font-size: 18px;
            height: 70%;
            background-color: #f2f2f2;
            :focus {
                border: none;
            }
        }
        button {
            font-size: 18px;
            height: 70%;
            width: 5vw;
            border: none;
            border-radius: 5px;
            background-color: var(--yellow);
        }
    }
`