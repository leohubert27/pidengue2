interface artigoProps {
    texto: String,
    posicaoDoTexto: 'L' | 'R',
    nomeImagem: String,
    altImagem: String
}

export default function Artigo({ texto, posicaoDoTexto, nomeImagem, altImagem }: artigoProps) {
    if (posicaoDoTexto == 'L') {
        return (
            <>
                <div className="flex flex-col mx-16 md:flex-row items-center gap-4 h-screen">
                    <p className="text-justify md:w-1/2">{texto}</p>
                    <img className="h-auto md:w-1/2" src={`/images/${nomeImagem}`} alt={`${altImagem}`}></img>
                </div>
            </>
        )
    }

    if (posicaoDoTexto == 'R') {
        return (
            <>
                <div className="flex flex-col mx-16 md:flex-row items-center gap-4 h-screen">
                    <img className="h-auto md:w-1/2" src={`../images/${nomeImagem}`} alt={`${altImagem}`}></img>
                    <p className= "text-justify md:w-1/2">{texto}</p>
                </div>
            </>
        )
    }
}