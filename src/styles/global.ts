import { createGlobalStyle } from 'styled-components';

export const GlobalCSS = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body,#root{
    width: 100vw;
    height: 100vh;
    font-family: ${({ theme }) => theme.fonts.epilogue};
    font-size: ${({ theme }) => theme.sizes.mediun};
    background:${({ theme }) => theme.colors.almostWhite};
    color: ${({ theme }) => theme.colors.almostBlack};
  }

  button{
    cursor: pointer;
  }

  button,input{
    bordeR: none;
    outline: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul,ol{
    list-style: none;
  }

`;
//
