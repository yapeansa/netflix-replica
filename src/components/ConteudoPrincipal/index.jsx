import { styled } from 'styled-components';
import Container from '@/components/Container';
import ComponenteSecao from './ComponenteSecao';
import TituloSecao from '../TituloSecao';
import favoritos from './favoritos/db.json';
import emAlta from './emAlta/db.json';
import estrangeiras from './estrangeiras/db.json';
import ComponentesCarrossel from './ComponentesCarrossel';

const Conteudo = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 40px;
`;

const GaleriaContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, auto);
    margin: 20px 0;
    position: relative;
    gap: 9px;
    a {
        transition: all .3s ease-in-out;
        img {
            max-width: 100%;
        }
        &:hover {
                margin: 0 40px;
                transform: scale(1.2);
        }
    }
`;

const ConteudoPrincipal = () => {

    const listaDeFotos = [
        {
            id: 1,
            label: "Favoritos",
            lista: favoritos
        },
        {
            id: 2,
            label: "Em alta",
            lista: emAlta
        },
        {
            id: 3,
            label: "Séries estrangeiras",
            lista: estrangeiras
        }
    ];

    return (
        <Container style={{ marginTop: "-70px" }}>
            <Conteudo>
                {listaDeFotos.map(item =>
                    <ComponenteSecao key={item.id}>
                        <TituloSecao>{item.label}</TituloSecao>
                        <GaleriaContainer>
                            {item.lista.map(imagem =>
                                <a href="#" key={imagem.id}>
                                    <img src={imagem.path} alt={imagem.titulo} />
                                </a>
                            )}
                        </GaleriaContainer>
                    </ComponenteSecao>
                )}
                <ComponentesCarrossel />
            </Conteudo>
        </Container>
    );
}

export default ConteudoPrincipal;
