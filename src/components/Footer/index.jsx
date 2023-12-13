import Container from '@/components/Container';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { styled } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const Rodape = styled.footer`
    margin-top: 35px;
    padding-bottom: 25px;
`;

const ContainerRodape = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 40px;
`

const Sociais = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 30px;
    .social-btn {
        color: var(--branco);
        transition: all .3s ease-out;
        &:hover {
            color: var(--vermelho-principal);
        }
    }
`;

const MosaicoDeTexto = styled.div`
    display: flex;
    gap: 150px;
    ul {
        list-style-type: none;
        display: block;
        display: flex;
        flex-flow: column nowrap;
        gap: 22px;
        li {
            font-size: 16px;
            a {
                text-decoration: none;
                color: var(--cinza-alternativo);
                transition: all .3s ease-in;
                &:hover {
                    text-decoration: underline;
                    color: var(--branco);
                }
            }
        }
    }
`;

const BotaoCodigo = styled.button`
    border: 2px solid var(--cinza-alternativo);
    background: var(--preto);
    padding: 10px;
    color: var(--cinza-alternativo);
    font-family: var(--fonte-principal);
    font-size: 16px;
    display: flex;
    width: fit-content;
    transition: all .3s ease;
    cursor: pointer;
    &:hover {
        background: var(--branco);
        color: var(--preto);
        border-color: transparent;
    }
`

const Footer = () => {

    const mosaico = [
        {
            id: 1,
            lista: ["Idioma e legendas", "Imprensa", "Privacidade", "Entre em contato"]
        },
        {
            id: 2,
            lista: ["Audiodescrição", "Relações com investidores", "Avisos legais"]
        },
        {
            id: 3,
            lista: ["Centro de ajuda", "Carreiras", "Preferência de cookies"]
        },
        {
            id: 4,
            lista: ["Cartão pré-pago", "Termos de uso", "Informações corporativas"]
        }
    ];

    return (
        <Rodape>
            <Container>
                <ContainerRodape>
                    <Sociais>
                        <a href="https://facebook.com" target="_blank"><FaFacebookF size={28} className="social-btn" /></a>
                        <a href="https://instagram.com" target="_blank"><FaInstagram size={28} className="social-btn" /></a>
                        <a href="https://twitter.com" target="_blank"><FaTwitter size={28} className="social-btn" /></a>
                        <a href="https://youtube.com" target="_blank"><FaYoutube size={28} className="social-btn" /></a>
                    </Sociais>
                    <MosaicoDeTexto>
                        {mosaico.map(objeto =>
                            <ul key={objeto.id}>
                                {objeto.lista.map(item =>
                                    <li key={uuidv4()}><a href="#">{item}</a></li>
                                )}
                            </ul>
                        )}
                    </MosaicoDeTexto>
                    <BotaoCodigo>
                        Código do serviço
                    </BotaoCodigo>
                    <p>&copy; 1997-2023 Netflix, Inc.</p>
                </ContainerRodape>
            </Container>
        </Rodape>
    );
}

export default Footer;
