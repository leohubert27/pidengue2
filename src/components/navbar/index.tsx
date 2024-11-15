type pageIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

interface NavbarProps {
    active: pageIndex
}

import Link from "next/link"

export default function Navbar() {
    return (
        <>
            <body>
                <div className="bg-white-100 flex flex-col px-0">
                    <nav className="flex justify-center bg-green-200 p-3">
                        <Link href="/" className="mx-4 px-4 py-2 font-semibold text-black-700 hover:bg-green-300 rounded-md">Home</Link>
                        <Link href="/oque" className="mx-4 px-4 py-2 font-semibold text-black-700 hover:bg-green-300 rounded-md">O que é?</Link>
                        <Link href="/historico" className="mx-4 px-4 py-2 font-semibold text-black-700 hover:bg-green-300 rounded-md">Histórico</Link>
                        <Link href="/atualmente" className="mx-4 px-4 py-2 font-semibold text-black-700 hover:bg-green-300 rounded-md">Atualmente</Link>
                        <Link href="/diagnostico" className="mx-4 px-4 py-2 font-semibold text-black-700 hover:bg-green-300 rounded-md">Diagnóstico</Link>
                        <Link href="/prevencao" className="mx-4 px-4 py-2 font-semibold text-black-700 hover:bg-green-300 rounded-md">Prevenção e Tratamento</Link>
                        <Link href="/matematica" className="mx-4 px-4 py-2 font-semibold text-black-700 hover:bg-green-300 rounded-md">Modelos</Link>
                    </nav>
                </div>
            </body>
        </>
    )
}