import Livro from "../../img/Livro.png";

export default function Wrapper(props) {
  return (
    <div className="wrapper">
      <div className="div-azul">
        <img src={Livro} className="livro" />

        <div className="conteudo">
          <h1>
            AMANHÃ VAI SER <span>PIOR</span>
          </h1>
          <h2>
            Todo o deboche, e toda a acuidade, dos Galãs Feios, agora por
            escrito. Helder Maldonado e Marco Bezzi, e vice-versa, são
            jornalistas de formação. Neste livro desfilam textos que, sem perder
            o humor jamais, mostram o quanto de trabalho de pesquisa e de
            interpretação inteligente dos fatos fazem a dupla chegar onde tem
            chegado.
          </h2>
          <button className="botao1" tabIndex={0}>
            GARANTA JÁ O SEU
          </button>
        </div>
      </div>
    </div>
  );
}
