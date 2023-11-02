import styled from "@emotion/styled";
import theme from "../../style/theme.js";
import getRandomColor from "./index.jsx";

export const Container = styled.div`
    display: table;
    width: 100%;
    height: 100%;
    text-align: center;
    border: none;
`;

export const Table = styled.table`
    border: none;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    background-color: ${theme.COLORS.CONTAINER_WHITE};
    th,
    td {
    display: table-cell; 
    vertical-align: middle;
    font-weight: ${theme.FONT_WEIGHT.BOLDER};
    font-size: 2rem;
    width: calc(90% / 6);
    height: calc(100% / 21);
    border: 0.1rem solid #F5ECED;
    }
`;

export const TimeContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-content: stretch;
    align-items: flex-start;
    justify-content: space-around;


    &:nth-of-type(2) {
        background-color: ${theme.COLORS.MAIN_ORANGE};
    }

    &:nth-child(3) {
        background-color: ${theme.COLORS.DEEP_ORANGE};
    }

    &:nth-child(4) {
        background-color: ${theme.COLORS.MAIN_YELLOW};
    }

    &:nth-child(5) {
        background-color: #CBC37A;
    }

    &:nth-child(6) {
        background-color: #FCC2BE;
    }
    hild(1) {

`;

export const LectureName = styled.div`
    white-space: pre-wrap;
    font-weight: ${theme.FONT_WEIGHT.BOLD};
    font-size: 2rem;
`;

export const StartTime = styled.div`
    font-size: 1.5rem;
`;

export const ProName = styled.div`
    font-size: 1.5rem;
`;

export const Place = styled.div`
    font-size: 1.5rem;
`;

