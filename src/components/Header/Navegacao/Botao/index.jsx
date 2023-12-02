import { styled } from 'styled-components';

const BotaoEstilizado = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
`;

const Botao = ({ children }) => {
    return (
        <BotaoEstilizado>
            {children}
        </BotaoEstilizado>
    );
}

export default Botao;
