import styled from "@emotion/styled";
import theme from "./theme.js";
import DGU_BG from '../assets/image/DGU_BG.jpg';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    background-color: ${theme.COLORS.BACKGROUND_WHITE};
    background-image: url(${DGU_BG});
    background-repeat: no-repeat;
    background-position: 100% 30vh;
    background-size: 100% 70vh;
`;

export const Container = styled.div`
    display: flex;
    width: 80%;
    align-items: center;
    flex-direction: column;
 
`;
export const TitleBox = styled.div`
    margin-top: 60px;
`;
export const Box = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;



export const LectureTitle = styled.div`
    font-size: ${theme.FONT_SIZE.TITLE_SIZE};
    font-weight: ${theme.FONT_WEIGHT.BOLD};
    margin-top: 20px;
    margin-bottom: 20px;
    color: ${theme.COLORS.DEEP_GRAY};
`;

export const CheckBoxList = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 5px;
    padding-top: 8%;
    padding-bottom: 8%;
    width: 600px;
    height: 500px;
    border-radius: 10px;
    border-style: solid;
    border-width: 1px;
    border-color: ${theme.COLORS.GRAY};
    background-color : rgb(255,255,255,0.8);
`;


export const lectureComponent = styled.div`
    width: 80%;
    height: 80%;
`;

export const lectureBtn = styled.div`
    width: 80%;
    height: 20%;
    positon: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const confirmBtn = styled.button`
    background-color: ${theme.COLORS.MAIN_ORANGE};
    color: ${theme.COLORS.CONTAINER_WHITE};
    font-size: 16px;
    border: none;
    border-radius: 6px;
    width: 150px;
    font-weight: 700;
    margin-top : 8%;
    margin-bottom: 5%;
    padding: 2.5%;
    cursor: pointer;
`;