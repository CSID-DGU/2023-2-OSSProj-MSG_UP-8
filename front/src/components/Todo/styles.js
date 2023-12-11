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
  margin-top: 1.5%;
  align-items: center;
  justify-content: space-between;
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};
`;

export const TodoList = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CheckBox = styled.input`
  border: none;
  width: 20px;
  height: 20px;
  margin-right: 3%;
  font-size: ${theme.FONT_SIZE.MAIN_SIZE};
`;

export const Text = styled.div`
  font-weight: ${theme.FONT_WEIGHT.BOLDER};
`;

export const Box = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
`;
