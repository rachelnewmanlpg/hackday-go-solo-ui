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

  @font-face {
    font-family:"proxima-regular";
    src:url("/assets/fonts/proxima-regular.woff2") format("woff2"),
    url("/assets/fonts/proxima-regular.woff") format("woff"),
    url("/assets/fonts/proxima-regular.otf") format("opentype");
    font-style:normal;
    font-weight:400;
  }

  @font-face {
    font-family:"proxima-semibold";
    src:url("/assets/fonts/proxima-semibold.woff2") format("woff2"),
    url("/assets/fonts/proxima-semibold.woff") format("woff"),
    url("/assets/fonts/proxima-semibold.otf") format("opentype");
    font-style:normal;
    font-weight:400;
  }


  @font-face {
      font-family: "passport";
      src:url("/assets/fonts/passport.woff") format("woff"),
          url("/assets/fonts/passport.ttf") format("truetype"),
          url("/assets/fonts/passport.svg#passport") format("svg");
      font-weight: normal;
      font-style: normal;

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
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 5px;
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 10px;

    button {
        color: #fff;
        background: #1c1870;
        border: solid 2px #1c1870;
        margin: 10px;
        padding: 10px 0;

        &:focus {
            outline: none;
            opacity: 0.8;
        }
    }

    .profile {
        padding: 10px 0;

        &--avatar {
            margin: 20px 0;
        }
        &--name {
            margin: 50px 0;
        }
    }
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
            color: #222;
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
            display: flex;
            flex-direction: column;
        }

        button {
            color: #18d2ff;
            position: absolute;
            right: 10px;
            bottom: 10px;

            &:focus,
            &:active {
                outline: none;
            }
        }

        &--tile {
            height: 100px;
            width: 100%;
            padding: 0 10px;
            position: relative;
            margin: 10px 0;
            display: flex;

            &__image {
                width: 150px;
                height: 100px;
                background: #1c1970;
            }

            &__content {
                width: 100%;
                height: 100%;
                padding: 5px;
                background: #fff;
                font-size: 14px;
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

export const SignUp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;

    > button {
        margin-top: 100px;
    }
`;
