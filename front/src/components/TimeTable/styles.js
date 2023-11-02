import styled from "@emotion/styled";
import theme from "../../style/theme.js";

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