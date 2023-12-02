import destaqueLogo from '@/assets/images/destaque-logo.png';
import { styled } from 'styled-components';
import BotaoAssistir from '../../BotaoAssistir';
import { FaPlay } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

const ContainerDestaque = styled.div`
    max-width: 450px;
    margin-top: 140px;
`

const TextoDestaque = styled.p`
    margin: 1rem 0 2rem;
    font-size: 16px;
    font-weight: 500;
`

const LogoDestaque = styled.img`
    max-width: 100%;
`

const ContainerBotoes = styled.div`
    display: flex;
    gap: 16px;
`

const FilmeDestaque = () => {
    return (
        <ContainerDestaque>
            <LogoDestaque src={destaqueLogo} alt="Texto alternativo" />
            <TextoDestaque>
                Em uma penitenciário de última geração, um detento participa de um experimento com drogas que controlam as emoções para um gênio da indústria farmacêutica.
            </TextoDestaque>
            <ContainerBotoes>
                <BotaoAssistir>
                    <FaPlay /> Assistir
                </BotaoAssistir>
                <BotaoAssistir $corDeFundo="rgba(239, 239, 239, .35)" $corDoTexto="var(--branco)">
                    <FaCircleInfo color="var(--branco)" /> Mais informações
                </BotaoAssistir>
            </ContainerBotoes>
        </ContainerDestaque>
    );
}

export default FilmeDestaque;
