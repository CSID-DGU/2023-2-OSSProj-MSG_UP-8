import styled from "@emotion/styled";
import theme from "../../style/theme.js";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    width: 100%;
    margin-bottom: 5%;
    height: 120px;
    background-color: ${theme.COLORS.CONTAINER_WHITE};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const LectureItem = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 2.5%;
    justify-content: space-between;
`;

export const Title = styled.div`
    height: 35%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const LectureTitle = styled.div`
    font-size: ${theme.FONT_SIZE.SUB_TITLE_SIZE};
    font-weight: ${theme.FONT_WEIGHT.BOLDER};
`;

export const LecturePageBtn = styled.button`
    height: 100%;
    width: 100px;
    border: none;
    border-radius: 10px;
    background-color: ${theme.COLORS.BLUE};
    color: ${theme.COLORS.CONTAINER_WHITE};
    font-size: ${theme.FONT_SIZE.SMALL_SIZE};
`;

export const Time = styled.div`
    height: 10%;
    display: flex;
    justify-content: space-between;
    font-weight: ${theme.FONT_WEIGHT.BOLD};
`;

export const LectureTime = styled.div`
    font-size: ${theme.FONT_SIZE.EXTRA_SMALL_SIZE};
`;

export const BtnContainer = styled.div`
    height: 40%;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
export const BtnContainer_c = styled.button`
    border: none;
    border-radius: 10px;
    width: 30%;
    background-color: ${theme.COLORS.DEEP_BLUE};
    color: ${theme.COLORS.CONTAINER_WHITE};
    font-weight: ${theme.FONT_WEIGHT.BOLD};
`;
