import styledNormalize from 'styled-normalize';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  html {
    width: 100%;
    height: 100%;
    margin: 0 0 1px;
    padding: 0;
    background: #f0f0f0;
    box-sizing: border-box;
    font-synthesis: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    font-size: 18px;
    width: 100%;
    height: auto;
    margin: 0;
    font-weight: 400;
    text-align: left;
    color: ${({ theme }) => theme.colors.primary};
    font-family: Arial, Helvetica, sans-serif
  }

  * {
    &,
    &::before,
    &::after {
      box-sizing: inherit;
    }

    font-synthesis: inherit;
    font-smoothing: inherit;
  }

  address {
    font-style: inherit;
  }

  figure {
    margin: 0;
  }

  .touch {
    cursor: pointer;
  }

  a,
  a:active {
    color: inherit;
    text-decoration: none;
    transition: all 100ms ease-out;

    &:hover {
      opacity: 0.7;
    }
  }

  p {
    margin: 0 0 10px;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  ul {
    padding: 0;
  }

  li {
    font-family: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px;
    font-family: inherit;
  }

  a,
  area,
  button,
  [role='button'],
  input:not([type='range']),
  label,
  select,
  summary,
  textarea {
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }

  button {
    border-radius: 0;
    appearance: none;
    background: transparent;
    border: 0;
  }
`;

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`;
