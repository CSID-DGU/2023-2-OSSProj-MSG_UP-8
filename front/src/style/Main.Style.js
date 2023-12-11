import styled from "@emotion/styled";
import theme from "./theme.js";
import DGU_BG from "../assets/image/DGU_BG.jpg";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: ${theme.COLORS.BACKGROUND_WHITE};
  background-image: url(${DGU_BG});
  background-repeat: no-repeat;
  background-position: right 30% bottom;
  background-size: 100% 70%;
`;

export const Container = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
  margin-bottom: 2%;
`;

export const main_login_btn = styled.button`
  margin-left: 2.5%;
  width: 200px;
  height: 50px;
  background-color: ${theme.COLORS.WARNING_RED};
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  color: ${theme.COLORS.CONTAINER_WHITE};
  font-size: ${theme.FONT_SIZE.SUB_TITLE_SIZE};
  border: none;
  border-radius: 5px;
`;

export const ComponentBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 4rem;
  justify-items: center;
  margin: 2%;
`;

export const message = styled.div`
  color: ${theme.COLORS.CONTAINER_WHITE};
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  font-size: ${theme.FONT_SIZE.MAIN_SIZE};
`;
export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 15px;
  width: 100%;
  height: 400px;

  &:nth-child(1) {
    background-color: ${theme.COLORS.MAIN_ORANGE};
    grid-column: 1/2;
    grid-row: 1/2;
  }

  &:nth-child(2) {
    background-color: ${theme.COLORS.MAIN_ORANGE};
    grid-column: 2/3;
    grid-row: 1/2;
  }

  &:nth-child(3) {
    background-color: ${theme.COLORS.DEEP_ORANGE};
    grid-column: 1/2;
    grid-row: 2/3;
  }

  &:nth-child(4) {
    background-color: ${theme.COLORS.MAIN_YELLOW};
    grid-column: 2/3;
    grid-row: 2/3;
  }
`;

// 로그인시

export const main_logout_btn = styled.button`
  margin-left: 1%;
  width: 170px;
  height: 50px;
  background-color: ${theme.COLORS.DEEP_BLUE};
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  color: ${theme.COLORS.CONTAINER_WHITE};
  font-size: ${theme.FONT_SIZE.SUB_TITLE_SIZE};
  border: none;
  border-radius: 5px;
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  font-size: ${theme.FONT_SIZE.MAIN_SIZE};
`;

export const User = styled.div`
  display: flex;
  margin-left: 2px;
  margin-right: 5px;
`;
export const Description = styled.div``;

export const NoteBox = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.COLORS.LIGHT_BLUE};
  border-radius: 5px;
  font-size: ${theme.FONT_SIZE.MAIN_SIZE};
  color: ${theme.COLORS.CONTAINER_WHITE};
  border: 2px solid ${theme.COLORS.CONTAINER_WHITE};
`;

export const Main_Lecture_item = styled.div`
  overflow-y: scroll;
  width: 90%;
  margin-top: 5%;
  margin-bottom: 5%;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Main_LogoutCal_item = styled.div`
  height: 100%;
  width: 90%;
  padding-top: 5%;
  padding-bottom: 5%;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Main_TimeTable_item = styled.div`
  width: 90%;
  overflow-y: scroll;
  height: 100%;
  margin-top: 2%;
  margin-bottom: 2%;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Main_Todo_item = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
`;
