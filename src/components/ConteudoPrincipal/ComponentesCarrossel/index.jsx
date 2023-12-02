import ComponenteSecao from '../ComponenteSecao';
import TituloSecao from '../../TituloSecao';
import { Wrapper, SecaoCarosel } from './ComponentesEstilizados';
import primeiraSecao from '../humor/secao1.json';
import segundaSecao from '../humor/secao2.json';
import terceiraSecao from '../humor/secao3.json';
import { useState } from 'react';
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

const ComponentesCarrossel = () => {

    const series = [
        {
            id: 1,
            titulo: "Séries excêntricas de humor ácido",
            secoes: [
                {
                    id: 1,
                    secao: primeiraSecao
                },
                {
                    id: 2,
                    secao: segundaSecao
                },
                {
                    id: 3,
                    secao: terceiraSecao
                }
            ]
        }
    ];

    const [iden, setIden] = useState(1);

    function aoClicar(acao) {
        switch (acao) {
            case "avancar":
                if (iden === 3)
                    setIden((iden) => iden - 2);
                else
                    setIden((iden) => iden + 1);
                break;
            default:
                if (iden === 1)
                    setIden((iden) => iden + 2);
                else
                    setIden((iden) => iden - 1);
                break;
        }
    }

    return (
        <>
            {series.map(item =>
                <ComponenteSecao key={item.id}>
                    <TituloSecao>{item.titulo}</TituloSecao>
                    <Wrapper>
                        {item.secoes.map(lista =>
                            <SecaoCarosel id={`section${lista.id}`} key={lista.id + 1}>
                                <a href={`#section${iden}`} className="arrow__btn" onClick={() => aoClicar("avancar")}>
                                    <SlArrowRight color="#FFF" size={40} />
                                </a>
                                <a href={`#section${iden}`} className="arrow__btn" onClick={() => aoClicar("recuar")}>
                                    <SlArrowLeft color="#FFF" size={40} />
                                </a>
                                {lista.secao.map(imagem =>
                                    <a href="https://www.google.com" key={imagem.id + 2} className="thumbnail">
                                        <img src={imagem.caminho} alt={imagem.titulo} />
                                    </a>
                                )}
                                
                            </SecaoCarosel>
                        )}
                    </Wrapper>
                </ComponenteSecao>
            )}
        </>
    );
}

export default ComponentesCarrossel;
