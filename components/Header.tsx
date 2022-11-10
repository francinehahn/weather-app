import { HeaderStyle } from "../styles/Header-style"
import Head from "next/head"
import Image from "next/image"

export function Header() {
    return (
        <>
        <Head>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap')
            </style>
        </Head>
        <HeaderStyle>
            <div>
                <Image src="/img/logo.png" alt="Logo do site" width="86" height="55"/>
                <h1>Weather App</h1>
            </div>
        </HeaderStyle>
        </>
    )
}