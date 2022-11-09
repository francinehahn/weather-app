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
            font-family: 'Montserrat', sans-serif;
        }
        select {
            font-family: 'Montserrat', sans-serif;
            border: none;
            font-size: 16px;
            height: 70%;
            background-color: #f2f2f2;
            :focus {
                border: none;
            }
        }
    }
    h1 {
        font-family: 'Montserrat', sans-serif;
        font-size: 28px;
        text-align: center;
        padding-top: 5vh;
        color: white;
    }
    section {
        display: flex;
        justify-content: center;
        gap: 4vw;
        padding-top: 5vh;
        div {
            display: flex;
            gap: .5vw;
            h4 {
                font-family: 'Montserrat', sans-serif;
                color: #fff;
            }
            p {
                font-family: 'Montserrat', sans-serif;
                color: #fff;
            }
        }
    }
    img {
        display: block;
        margin: 10vh auto 2vh auto;
    }
    h5 {
        font-family: 'Montserrat', 'sans-serif';
        font-size: 20px;
        font-weight: 400;
        text-align: center;
        color: #fff;
    }
`