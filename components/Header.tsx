import Link from "next/link"
import { HeaderStyle } from "../styles/Header-style"


export function Header() {
    return (
        <HeaderStyle>
            <Link href="/">Página inicial</Link>
            <Link href="/historyData">Histórico</Link>
        </HeaderStyle>
    )
}