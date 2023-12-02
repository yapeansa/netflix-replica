import logo from '@/assets/images/logo.svg';
import { styled } from 'styled-components';
import Container from '@/components/Container';
import { FaSearch, FaBell } from "react-icons/fa";
import Botao from './Botao';
import avatar from '@/assets/images/avatar.svg';
import { TiArrowSortedDown } from "react-icons/ti";
import { MdLogout } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { LuUsers } from "react-icons/lu";
import { useState } from 'react';

const ContainerNavBar = styled.div`
    width: 100%;
    height: 70px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const MenuWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
`

const Separador = styled.div`
    display: flex;
    align-items: center;
    gap: ${props => props.$espacamento ? props.$espacamento : '40px'};
    img {
        max-width: 93px;
    }
    select {
        appearance: none;
        background: #000 url(${avatar}) no-repeat center / contain;
        border: none;
        outline: none;
        width: 32px;
        height: 32px;
    }
`;

const MenuNav = styled.nav`
    ul {
        list-style-type: none;
        display: flex;
        gap: 15px;
        a {
            color: var(--branco);
            text-decoration: none;
            display: block;
            padding: 8px 0;
            font-weight: 500;
            position: relative;
            &::before {
                content: '';
                position: absolute;
                transition: .3s ease-in-out;
                left: 0;
                bottom: 0;
                width: 0;
                height: 2px;
                z-index: 100;
                background-color: var(--vermelho-principal);
            }
            &:hover {
                &::before {
                    width: 100%;
                }
            }
        }
    }
`;

const DropDown = styled.div`
    div {
        display: flex;
        align-items: flex-end;
        gap: 8px;
        cursor: pointer;
    }
    position: relative;
    height: 32px;
    ul {
        position: absolute;
        top: 105%;
        right: 0;
        display: ${props => props.$opcoes ? 'flex' : 'none'};
        animation-name: fadeIn;
        animation-duration: .3s;
        animation-iteration-count: 1;
        animation-timing-function: ease-in-out;
        flex-direction: column;
        gap: 8px;
        list-style-type: none;
        background: rgba(0, 0, 0, .8);
        padding: .8rem 1rem;
        border-radius: 8px;
        font-weight: 500;
        li {
            display: flex;
            align-items: center;
            border-bottom: 1px solid #333;
            padding: 8px 1rem 14px;
            &:last-child {
                border-bottom: none;
            }
        }
        a {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--branco);
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }
`;

const Navegacao = () => {

    const [opcoes, setOpcoes] = useState(false);

    const menu = [
        {
            id: 1,
            titulo: 'Início'
        },
        {
            id: 2,
            titulo: 'Séries'
        },
        {
            id: 3,
            titulo: 'Filmes'
        },
        {
            id: 4,
            titulo: 'Em alta'
        },
        {
            id: 5,
            titulo: 'Minha lista'
        }
    ];

    return (
        <ContainerNavBar>
            <Container>
                <MenuWrap>
                    <Separador>
                        <img src={logo} alt="logo" />
                        <MenuNav>
                            <ul>
                                {menu.map(item => <li key={item.id}><a href="#">{item.titulo}</a></li>)}
                            </ul>
                        </MenuNav>
                    </Separador>
                    <Separador $espacamento="18px">
                        <Botao>
                            <FaSearch color="var(--branco)" size={24} />
                        </Botao>
                        <Botao>
                            <FaBell color="var(--branco)" size={24} />
                        </Botao>
                        <DropDown $opcoes={opcoes}>
                            <div onClick={() => setOpcoes(!opcoes)}>
                                <img src={avatar} alt="Avatar" />
                                <TiArrowSortedDown color="var(--branco)" size={24} />
                            </div>
                            <ul>
                                <li><a href="#"><IoMdSettings color="var(--branco)" size={25} />Configurações</a></li>
                                <li><a href="#"><LuUsers color="var(--branco)" size={25} />Trocar usuário</a></li>
                                <li><a href="#"><MdLogout color="var(--branco)" size={25} />Fazer Logout</a></li>
                            </ul>
                        </DropDown>
                    </Separador>
                </MenuWrap>
            </Container>
        </ContainerNavBar>
    );
}

export default Navegacao;
