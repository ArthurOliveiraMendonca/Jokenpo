import { useState } from 'react'
import './Jokenpo.css'

const paper_icon = "http://cdn.onlinewebfonts.com/svg/img_294420.png";
const rock_icon = "https://www.shareicon.net/data/2016/11/14/851912_hand-o-rock_512x512.png";
const scissors_icon = "https://www.pngkit.com/png/full/37-377207_hand-scissors-icon.png"

function Jokenpo() {
  const [jogadaEsquerda, setJogadaEsquerda] = useState(null);
  const [jogadaDireita, setJogadaDireita] = useState(null);
  const [resultadoJogo, setResultadoJogo] = useState('Inicie uma partida');
  const [vitoriasUsuario, setVitoriasUsuario] = useState(0);
  const [vitoriasMaquina, setVitoriasMaquina] = useState(0);
  const [empates, setEmpates] = useState(0);

  const escolhasComputador = ['jogada_tesoura', 'jogada_papel', 'jogada_pedra'];

  function sortearJogadaMaquina() {
    const numero = Math.floor(Math.random() * escolhasComputador.length);
    setJogadaDireita(escolhasComputador[numero]);
  }

  function escolherJogada(escolha) {
    setJogadaEsquerda(`jogada_${escolha}`);
  }

  function jogar() {
    escolherJogadaAleatoriaDaMaquina();
    determinarResultado();
  }

  function escolherJogadaAleatoriaDaMaquina() {
    sortearJogadaMaquina();
  }

  function determinarResultado() {
    if (jogadaEsquerda === jogadaDireita) {
      setResultadoJogo('EMPATE');
      setEmpates(empates + 1);
    } else if (
      (jogadaEsquerda === 'jogada_tesoura' && jogadaDireita === 'jogada_pedra') ||
      (jogadaEsquerda === 'jogada_pedra' && jogadaDireita === 'jogada_papel') ||
      (jogadaEsquerda === 'jogada_papel' && jogadaDireita === 'jogada_tesoura')
    ) {
      setResultadoJogo('DERROTA');
      setVitoriasMaquina(vitoriasMaquina + 1);
    } else {
      setResultadoJogo('VITÓRIA');
      setVitoriasUsuario(vitoriasUsuario + 1);
    }
  }

  return (
    <div>
      <h1>Jokenpô</h1>
      <div id='holder_jokenpo'>
        <div id='jogador_esquerda'>
          <h2>Você</h2>
          <div className='imgs_escolhas'>
            <button id='btn_scissors' onClick={() => escolherJogada('tesoura')}>
              <img src={scissors_icon} alt="tesoura" />
            </button>
            <button id='btn_rock' onClick={() => escolherJogada('pedra')}>
              <img src={rock_icon} alt="pedra" />
            </button>
            <button id='btn_paper' onClick={() => escolherJogada('papel')}>
              <img src={paper_icon} alt="papel" />
            </button>
          </div>
        </div>
        <button id='btn_jogar' onClick={jogar}>JOGAR!</button>
        <div id='jogador_direita'>
          <h2>Máquina</h2>
          <div className='imgs_escolhas'>
          {jogadaDireita && (
            <img src={obterImagemEscolha(jogadaDireita)}/>
          )}
          </div>
        </div>
      </div>
      <div id='holder_resultados'>
        <h1>{resultadoJogo}</h1>
        <h2>{vitoriasUsuario} X {vitoriasMaquina}</h2>
        <h2>Empates: {empates}</h2>
      </div>
    </div>
  );
}

function obterImagemEscolha(escolha) {
  switch (escolha) {
    case 'jogada_tesoura':
      return scissors_icon;
    case 'jogada_papel':
      return paper_icon;
    case 'jogada_pedra':
      return rock_icon;
    default:
      return null;
  }
}

export default Jokenpo;