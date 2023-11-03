import styled from "@emotion/styled";
import theme from "../../style/theme.js";
export const LectureContainer = styled.div`
    margin-top: 2%;
    margin-bottom: 2%;
`;

export const CheckBox = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;

    &:checked + label {
        background-color: ${theme.COLORS.MAIN_YELLOW};
        color:${theme.COLORS.CONTAINER_WHITE};
    }
`;


export const LectureTextLabel = styled.label`
    width: 100%;
    padding: 2px;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: ${theme.COLORS.CONTAINER_WHITE};
    color: ${theme.COLORS.BLACK};
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    border-color: ${theme.COLORS.GRAY};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
export const LectureTitle = styled.div`
    padding-left: 20px;
    font-size: ${theme.FONT_SIZE.MAIN_SIZE};
    font-weight: ${theme.FONT_WEIGHT.BOLD};
`;


