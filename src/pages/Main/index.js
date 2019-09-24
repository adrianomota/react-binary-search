import React, { useState } from "react";
import { Container } from "./styles";

export default function Main() {
  const [entrada, setEntrada] = useState("ENTRADA");
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(150);

  const iniciarJogo = () => {
    setEntrada("RODANDO");
    setMin(0);
    setMax(300);
    setNumPalpites(1);
    setPalpite(150);
  };

  const Menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const Maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const Acertou = () => {
    setEntrada("FIM");
  };

  return (
    <Container>
      {entrada === "ENTRADA" && (
        <button onClick={iniciarJogo}>Comecar Jogo</button>
      )}
      {entrada === "RODANDO" && (
        <>
          <p> O seu palpite é {palpite}</p>
          <p>
            Min {min} | Max {max}
          </p>
          <button type="button" onClick={Maior}>
            Maior{" "}
          </button>
          <button type="button" onClick={Menor}>
            Menor{" "}
          </button>
          <button type="button" onClick={Acertou}>
            Acertou{" "}
          </button>
        </>
      )}
      {entrada === "FIM" && (
        <>
          <p>
            Acertei o nuumero {palpite} com {numPalpites} chutes
          </p>
          <button type="button" onClick={iniciarJogo}>
            Inicial novamente
          </button>
        </>
      )}
      ;
    </Container>
  );
}
