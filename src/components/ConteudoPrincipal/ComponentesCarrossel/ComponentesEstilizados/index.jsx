import { styled } from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 100%);
    overflow: hidden;
    scroll-behavior: smooth;
`;

const SecaoCarosel = styled.div`
    width: 100%;
    display: grid;
    position: relative;
    grid-template-columns: repeat(5, auto);
    margin: 20px 0;
    gap: 9px;
    .arrow__btn {
        position: absolute;
        width: fit-content;
        padding: 10px;
        z-index: 1;
        display: flex;
        align-items: center;
        &:nth-of-type(1) {
            top: -16px;
            bottom: 0;
            right: 0;
            background: linear-gradient(90deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, .7) 100%);
        }
        &:nth-of-type(even) {
            top: -16px;
            bottom: 0;
            background: linear-gradient(-90deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, .7) 100%);
            left: 0;
        }
    }
    .thumbnail {
        transition: all .3s ease-in-out;
        &:hover {
            margin: 0 40px;
            transform: scale(1.2);
        }
        img {
            max-width: 100%;
        }
    }
`;

export { Wrapper, SecaoCarosel };
