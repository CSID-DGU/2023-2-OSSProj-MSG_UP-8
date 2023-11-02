import styled from "@emotion/styled";
import theme from "../../style/theme.js";


export const TodoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90%;
`;

export const TodoTitle = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${theme.COLORS.BLACK};
    font-size: ${theme.FONT_SIZE.TITLE_SIZE};
    font-weight: ${theme.FONT_WEIGHT.BOLDER};
    padding-top: 1.5%;
    padding-bottom: 1.5%;
`;

export const Today = styled.div`
    display: flex;
    align-items: center;
    padding-top: 2%;
    padding-bottom: 2%;

`;
export const TodayDate = styled.div`
    display: flex;
    margin-right: 2%;
`;
export const TodayDay = styled.div``;

export const TodoInputBox = styled.div`
    display: flex;
    align-items: center;
    border: none;
    justify-content: space-between;
`;

export const TodoInput = styled.input`
    padding-top: 2%;
    padding-bottom: 2.5%;
    border: none;
    font-size: ${theme.FONT_SIZE.SMALL_SIZE};
    &:focus {
        outline: none;
    }
    &::-webkit-input-placeholder {
        color: ${theme.COLORS.BLACK};
        font-weight: ${theme.FONT_WEIGHT.BOLD};
    }
    background: transparent;
    color: ${theme.COLORS.BLACK};
`;

export const TodoListItem = styled.div`
    display: flex;
    height: 25px;
    margin-top: 2%;
    overflow: scroll;
    align-items: center;
    justify-content: space-between;
    font-size: ${theme.FONT_SIZE.SMALL_SIZE};
`;

export const CheckBox = styled.input`
    border: none;
    margin-right: 3%;
    font-size: ${theme.FONT_SIZE.SMALL_SIZE};
`;

export const text = styled.div``;

export const box = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`;
export const TodoList = styled.div``;


