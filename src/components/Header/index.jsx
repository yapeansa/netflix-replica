import { styled } from 'styled-components';
import fundoBanner from '@/assets/images/fundo-banner.png';
import Container from '@/components/Container';
import FilmeDestaque from '@/components/Header/FilmeDestaque';
import Navegacao from './Navegacao';

const Banner = styled.header`
    padding-bottom: 190px;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background: url(${fundoBanner}) no-repeat top center / cover fixed;
        box-shadow: 0px 0px 80px 20px #000 inset;
        width: 100%;
        height: 100%;
        z-index: -1;
        filter: brightness(50%);
    }
`;

const Header = () => {
    return (
        <Banner>
            <Navegacao />
            <Container>
                <FilmeDestaque />
            </Container>
        </Banner>
    );
}

export default Header;
