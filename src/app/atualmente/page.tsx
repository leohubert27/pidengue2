import Navbar from "@/components/navbar";
import Artigo from "@/components/artigo"
import Titulo from "@/components/titulo";

export default function atualmente() {
    return (
        <>
        <Navbar/>
        <Titulo texto="Atualmente" />
        <Artigo
        texto="A dengue sempre foi um problema, dos grandes, em países subtropicais e tropicais. As mudanças climáticas, a alta taxa de urbanização acontecendo a todo momento são fatores que contribuem para que o mosquito Aedes Aegypti se propague com mais facilidade. Ultimamente o surto de dengue tem piorado bastante, tanto sua propagação, quanto as consequências da pessoa que contraiu a dengue, aumentando rapidamente o número de casos e mortes. O vírus da dengue vem desafiando os sistemas de saúde no Brasil inteiro, o Distrito Federal está na liderança de estado com mais casos de dengue no Brasil (coeficiente de incidência)."
        posicaoDoTexto="R"
        nomeImagem="infografico.svg"
        altImagem="Gráfico que apresenta algumas informações sobre a dengue no Brasil, uma pesquisa de 24 de maio de 2024, os dados apresentados são 5.239.867 casos prováveis, 3.038 mortes confirmadas e 2.679 mortes em investigação"
        heightImagem="max-h-96" />
        </>
    )
}