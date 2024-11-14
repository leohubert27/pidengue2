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
                <div className="w-4/5 flex flex-row justify-center items-center h-screen">
                    <p className="text-justify">{texto}</p>
                    <img src={`/images/${nomeImagem}`} alt={`${altImagem}`}></img>
                </div>
            </>
        )
    }

    if (posicaoDoTexto == 'R') {
        return (
            <>
                <div className="w-4/5 flex flex-row justify-center items-center h-screen">
                    <img src={`"../images/${nomeImagem}"`} alt={`"${altImagem}"`}></img>
                    <p className="text-justify">{texto}</p>
                </div>
            </>
        )
    }
}