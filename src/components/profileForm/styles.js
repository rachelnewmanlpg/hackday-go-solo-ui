import styled from 'styled-components';
import { Button } from '@pickle/button';
import { Input } from '@pickle/input';

export const Show = styled.div`
    ${({ show }) => !show && 'display:none;'}
`;
export const Form = styled.form`
    text-align: left;
    margin: 20px auto;
`;
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
    ${({ between }) => between && 'justify-content: space-around;'}
    ${({ question }) => question === '2' && 'justify-content: center;'}
`;

export const QuestionRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    padding: 5px;
    justify-content: space-between;
`;

export const MainInfo = styled.div`
    display: flex;
    background-color: #f0f0f0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    padding: 40px;
    margin: 20px auto;
`;

export const ExtraInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
`;

export const RadioIcon = styled.div`
    font-size: 60px;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.colors.primary};
    width: 80px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledInput = styled(Input)`
    background-color: #fff;
    margin: 5px 0;
`;

export const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 3px;

    ${({ row }) =>
        row &&
        `
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
    `}
    :hover {
        ${RadioIcon} {
            background-color: ${({ theme }) => theme.colors.tertiary};
        }
        cursor: pointer;
    }

    ${({ interest, theme }) =>
        interest &&
        `
            border: 3px solid ${theme.colors.primary};
            padding: 10px;
            border-radius: 3px;


            :hover {
                background-color: ${theme.colors.tertiary};
                cursor: pointer;
            }

    `}
`;
export const StyledRadio = styled.input`
    appearance: none;

    :checked + ${RadioIcon} {
        background-color: ${({ theme }) => theme.colors.tertiary};
    }
    :checked + ${StyledLabel} {
        background-color: ${({ theme }) => theme.colors.tertiary};
    }
`;

export const Flex = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
`;

export const StyledButton = styled(Button)`
    margin: 20px auto;
`;

export const StyledIcon = styled.i`
    vertical-align: middle;
    width: 18px;
    height: 18px;
    margin-right: 5px;
    fill: currentColor;

    ${({ deleteIcon }) =>
        deleteIcon &&
        `
        width: 20px;
        height: 20px;
        font-size:20px;
        margin: 5px;
    `}
`;

export const StyledRange = styled.input`
    appearance: none;
    margin: 10px 0;
    width: 100%;

    ::-webkit-slider-runnable-track {
        width: 100%;
        height: 12.8px;
        cursor: pointer;
        box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
        border-radius: 25px;
        border: 0px solid #000101;
        background: ${({ theme }) => theme.colors.tertiary};
    }
    ::-webkit-slider-thumb {
        box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
        border: 0px solid #000000;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.primary};
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -3.6px;
    }

    ::-moz-range-track {
        width: 100%;
        height: 12.8px;
        cursor: pointer;
        animate: 0.2s;
        box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
        border-radius: 25px;
        border: 0px solid #000101;
    }
    ::-moz-range-thumb {
        box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
        border: 0px solid #000000;
        height: 20px;
        width: 39px;
        border-radius: 7px;
        background: ${({ theme }) => theme.colors.primary};
        cursor: pointer;
    }
    ::-ms-track {
        width: 100%;
        height: 12.8px;
        cursor: pointer;
        animate: 0.2s;
        background: transparent;
        border-color: transparent;
        border-width: 39px 0;
        color: transparent;
    }
    &::-ms-fill-upper {
        background: ${({ theme }) => theme.colors.tertiary};
        border-radius: 0;
    }
    ::-ms-fill-lower {
        background: ${({ theme }) => theme.colors.primary};
    }

    ::-moz-range-progress {
        background: ${({ theme }) => theme.colors.primary};
    }

    ::-ms-thumb {
        box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
        border: 0px solid #000000;
        height: 20px;
        width: 39px;
        border-radius: 7px;
        background: ${({ theme }) => theme.colors.primary};
        cursor: pointer;
    }
`;
