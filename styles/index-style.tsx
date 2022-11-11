import styled from "styled-components"

export const Container = styled.section `
    background-color: var(--lightblue);
    height: 90vh;
    form {
        width: 100vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 2vw;
        background-color: #fff;
        @media screen and (min-width: 540px) {
            height: 6vh;
        }
        @media screen and (max-width: 540px) {
            height: 9vh;
            padding: 1vh 0;
        }

        div {
            display: flex;
            align-items: center;
            gap: .5vw;
            label {
                font-family: 'Montserrat', sans-serif;
                @media screen and (min-width: 810px) {
                    font-size: 18px;
                }
                @media screen and (max-width: 810px) {
                    font-size: 16px;
                }
            }
            select {
                font-family: 'Montserrat', sans-serif;
                border: none;
                height: 4vh;
                background-color: #f2f2f2;
                :focus {
                    border: none;
                }
                @media screen and (min-width: 810px) {
                    font-size: 16px;
                }
                @media screen and (max-width: 810px) {
                    font-size: 14px;
                }
            }
        }
    }
    h2 {
        font-family: 'Montserrat', sans-serif;
        text-align: center;
        padding: 7vh 1vw 5vh 1vw;
        color: white;
        @media screen and (min-width: 800px) {
            font-size: 28px;
        }
        @media screen and (max-width: 800px) {
            font-size: 24px;
        }
    }
    h3 {
        font-family: 'Montserrat', sans-serif;
        color: var(--yellow);
        text-align: center;
        @media screen and (min-width: 800px) {
            font-size: 32px;
        }
        @media screen and (max-width: 800px) {
            font-size: 28px;
        }
    }
    section {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 4vw;
        padding: 6vh 2vw 0 2vw;
        div {
            display: flex;
            gap: .5vw;
            h4 {
                font-family: 'Montserrat', sans-serif;
                color: #fff;
                font-size: 16px;
            }
            p {
                font-family: 'Montserrat', sans-serif;
                color: #fff;
                font-size: 16px;
            }
        }
    }
    img {
        display: block;
        margin: 5vh auto 0 auto;
    }
    h5 {
        font-family: 'Montserrat', 'sans-serif';
        font-weight: 400;
        text-align: center;
        color: #fff;
        @media screen and (min-width: 800px) {
            font-size: 20px;
        }
        @media screen and (max-width: 800px) {
            font-size: 18px;
        }
    }
`