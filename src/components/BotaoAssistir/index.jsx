import { styled } from 'styled-components';

const BotaoAssistir = styled.button`
    font-weight: 700;
    font-size: 18px;
    background-color: ${props => props.$corDeFundo ? props.$corDeFundo : 'var(--branco-claro)'};
    padding: 14px 32px;
    color: ${props => props.$corDoTexto ? props.$corDoTexto : 'var(--preto)'};
    border: none;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    border-radius: 8px;
    transition: all .3s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
`;

export default BotaoAssistir;
