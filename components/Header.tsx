import Link from "next/link"
import { HeaderStyle } from "../styles/Header-style"
import Head from "next/head"

export function Header() {
    return (
        <>
        <Head>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap')
            </style>
        </Head>
        <HeaderStyle>
            <Link href="/">Página inicial</Link>
            <Link href="/historyData">Histórico</Link>
        </HeaderStyle>
        </>
    )
}