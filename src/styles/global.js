import styledNormalize from 'styled-normalize';
import styled, { createGlobalStyle } from 'styled-components';
import { UserIcon } from '@pickle/icons';

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

export const AttractionList = styled.div`
    h1 {
        text-align: center;
        margin: 20px 0;
    }

    p {
        text-align: center;
        padding: 0 10px;
    }

    .attraction {
        &--btn {
            display: block;
            width: 80%;
            color: #fff;
            background: #18d2ff;
            padding: 10px;
            margin: 20px auto;
            border-radius: 5px;

            &__submit {
                position: fixed;
                bottom: 10px;
                left: 50%;
                transform: translateX(-50%);
                box-shadow: 0px 110px 80px 140px white;
            }

            &:focus,
            &:active {
                outline: none;
            }
        }

        &--wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 5px;
            row-gap: 5px;
        }

        button {
            color: #18d2ff;
            position: absolute;
            left: 10px;

            &:focus,
            &:active {
                outline: none;
            }
        }

        &--tile {
            width: 100%;
            background: #111;
            color: #fff;
            padding: 10px;
            aspect-ratio: 1 / 1;
            position: relative;

            &__content {
                position: absolute;
                bottom: 10px;
                left: 10px;
                right: 10px;
                font-size: 14px;
                overflow: hidden;
                -webkit-box-orient: vertical;
                display: block;
                display: -webkit-box;
                overflow: hidden !important;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
            }
        }
    }
`;

export const UserIconWrapper = styled(UserIcon)`
    fill: #18d2ff;

    &.active {
        fill: #9df6c7;
    }
`;
