import { createGlobalStyle } from "styled-components";

const EstilosGlobais = createGlobalStyle`
    :root {
        --cor-primaria: ;
        --preto: #000;
        --branco: #FFF;
        --branco-claro: #EFEFEF;
        --cinza-alternativo: #808080;
        --vermelho-principal: #F1252F;
        --fonte-principal: 'Inter', sans-serif;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: var(--fonte-principal);
        font-weight: 400;
        background-color: var(--preto);
        color: var(--branco);
    }
`

export default EstilosGlobais;
